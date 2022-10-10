import React from 'react'
import './Swiper.scss'
import { Swiper } from './Swiper'

export default function FlSwiper(props: any): Swiper {
    let { imgList, height, width, deply } = props;
    // 定义ul的位置状态
    const [tranUl, setTranUl] = React.useState(-width);

    // 控制ul的动画属性
    const [tranBox, setreanBox] = React.useState("all 0.4s ease");

    // 节流阀
    const [throttle, setthrottle] = React.useState(true);

    // 控制自动轮播
    const [tree, settree] = React.useState(true);


    // 点击右边
    function rightTo() {
        console.log(throttle);
        if (throttle) {
            // console.log("关闭阀门");
            setthrottle(false)
            setTranUl((tran) => {
                return tran + (-width)
            })
            setTimeout(() => {
                setthrottle(true)
            }, 650)

        }

    }

    // 生命周期监测是否走到最后一张或第一张
    React.useEffect(() => {
        if (tranUl == -width || tranUl == -width * imgList.length - 1) {
            setreanBox("all 0.4s ease")
        }
        if (tranUl <= -width * (imgList.length + 1)) {
            let timer = setTimeout(() => {
                setreanBox("none")
                setTranUl(-width)
            }, 400);
            return () => {
                clearTimeout(timer)
            }
        } else if (tranUl == 0) {
            let timer = setTimeout(() => {
                setreanBox("none")
                setTranUl(-width * imgList.length)
            }, 400);
            return () => {
                clearTimeout(timer)
            }
        }
    }, [tranUl])

    // 点击左边
    function leftTo() {
        if (throttle && tranUl !== 0) {
            setthrottle(false)
            setTranUl((tran) => {
                return tran - (-width)
            })
            setTimeout(() => {
                setthrottle(true)
            }, 650)

        }
    }

    // 自动轮播
    React.useEffect(() => {
        if (deply) {
            let timer = setInterval(() => {
                console.log(tree);
                if (tree) {
                    settree(false)
                    setTranUl((tran) => {
                        return tran + (-width)
                    })
                    setTimeout(() => {
                        settree(true)
                    }, deply);
                }
            }, deply);
            return () => {
                clearInterval(timer)
            }
        }
    }, [])


    return (
        <div
            style={{ height: height, width: width, overflow: 'hidden', margin: '0 auto', position: 'relative' }}
            className="rotation"
        >
            <button className="lt" onClick={leftTo} style={{ position: 'absolute', top: '50%', left: '0', zIndex: '9999' }}>左边</button>
            <ul
                id="rotationBox"
                style={{
                    display: 'flex',
                    width: width * (imgList.length + 2),
                    height: height,
                    overflow: 'hidden',
                    transform: `translateX(${tranUl}px)`,
                    transition: tranBox
                }}
            >
                <li style={{ width }}><img src={imgList[imgList.length - 1]} alt="-1" /></li>
                {
                    imgList.map((itme: string, index: any) => {
                        return <li key={index}><img src={itme} alt={index} style={{ width: width, height: height }} /></li>
                    })
                }
                <li><img src={imgList[0]} alt={imgList.length + 1} /></li>
            </ul>
            <button className="rt" onClick={rightTo} style={{ position: 'absolute', top: '50%', right: '0' }}>右边</button>
        </div>
    )
}

