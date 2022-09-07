import React, { useState, useRef } from 'react'
import { Props } from './table'
import Icon from './components'
import Sear from './components/index1'
import Pagination from './components/pagination'
import './style/Table.scss'


export default function index({ titleParams, tableData, align = 'left',
    expandedRowRender, radio, checked, avableSort, filter, largeDateShowNum, virtualized
    , lazyLoad, pagination, paginationAlign, changePNumCallback, changePSizeCallback
    , dropabled, dropCallback }: Props) {
    let [data, setData] = useState(false)
    // let [el, setEl] = useState('')
    let [defData, setdefData] = useState(tableData);
    let checks = useRef(null)

    let style = {
        cursor: dropabled ? 'move' : ""
    }
    // console.log(style);

    //总选框
    let CheckAll = () => {
        if (checks.current) {
            let dom: any = checks.current
            let check = dom.querySelectorAll('table .concis-checkbox')
            let all: any = dom.querySelector('.all')
            Array.from(check).slice(1, check.length).forEach((item: any, index: any) => {
                if (all.checked) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }

            })
        }
    }
    //单选框
    let Check = () => {
        let dom: any = checks.current
        let check = dom.querySelectorAll('table .concis-checkbox')
        let all: any = dom.querySelector('.all')


        let bool = true;
        Array.from(check).slice(1, check.length).forEach((item: any) => {
            if (!item.checked) {
                bool = false;
                all.checked = false;
            }
        });
        if (bool) {
            console.log(1);
            all.checked = true;
        }

    }

    //展开行
    let show = (e: any, item: any) => {
        data = !data;
        setData(data);
        e.target.parentNode.parentNode.nextSibling.classList.add("active");
        let tr = e.target.parentNode.parentNode.nextSibling;
        if (data) {
            tr.style.display = ''
        } else {
            tr.style.display = 'none'

        }
    }

    //排序
    let maps = (e: any, num: any) => {

        let names = e.target.parentNode.parentNode.previousSibling.innerText
        // console.log(names);
        titleParams.forEach((item: any, index: any) => {
            if (item.title == names) {
                if (typeof item.sorter == 'boolean' && num) {
                    defData.sort((a: any, b: any) => {
                        return b[names.toLowerCase()] - a[names.toLowerCase()]
                    });
                    setdefData([...defData])
                }
                else {
                    defData.sort((a: any, b: any) => a[names.toLowerCase()] - b[names.toLowerCase()]);
                    setdefData([...defData])
                }

                if (typeof item.sorter == 'object' && num) {
                    // console.log(1);
                    defData.sort(item.sorter[num])
                    setdefData([...defData])
                }
                else {
                    // console.log(2);
                    defData.sort(item.sorter[num])
                    setdefData([...defData])
                }

                // console.log(defData[index].sorter[num]);


            }
        });

    }

    //懒加载？？？？？？

    //分页 ？？？？？？
    let handleChange = (idx: any) => {
        console.log('页码改变 => ', idx);
    }
    //拖拽 ？？？？？
    //拖拽开始
    let onstart = (e: any) => {
        // console.log(1, e.target.className);
        e.dataTransfer.setData('tr', e.target.className);
    }

    //放置目标
    let onrun = (e: any) => {
        var data = e.dataTransfer.getData('tr');
        var dom = document.getElementsByClassName(data)[0];
        let news = e.target.parentNode;
        e.target.parentNode.parentNode.insertBefore(dom, news)
    }
    console.log(virtualized);

    return (
        <div>
            {/* //  表示固定列展示的数据条数 不完善 ？？？？？ */}
            <table className="table" ref={checks} style={{ overflow: virtualized == false ? 'auto' : 'hidden', maxHeight: largeDateShowNum ? (largeDateShowNum * 78 + 50) + 'px' : '' }
            }>
                <thead>
                    <tr >
                        {expandedRowRender || radio || checked ?
                            <th style={{ textAlign: (align as any) || 'left' }} >
                                {checked ?
                                    <input type="checkbox" className='concis-checkbox noActived all' id="" onChange={() => { CheckAll() }} /> : <></>
                                }
                            </th> : <></>}
                        {
                            titleParams.map((item: any, index: any) => {
                                return (
                                    <th key={item + index} className={["tableHead", align].join(' ')} style={{ textAlign: (align as any) || 'left' }}>
                                        <div className="title">
                                            <span>{item.title}</span>
                                            {item.sorter ? <Icon maps={avableSort ? maps : ''} /> : <></>

                                            }
                                            {filter && item.filter ? <Sear /> : <></>}
                                        </div>
                                    </th>
                                )
                            }
                            )

                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        defData.slice(0, virtualized ? 10 : defData.length).map((item: any, index: any) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr key={item + index} style={style} className={dropabled ? 'tr' + index : ''} draggable={dropabled ? true : false} onDragStart={(e) => { onstart(e) }} onDrop={(e) => { onrun(e) }} onDragOver={(ev) => { ev.preventDefault(); }}>
                                        {expandedRowRender || radio || checked ?
                                            <td style={{ textAlign: (align as any) || 'left', cursor: 'pointer' }}>

                                                {
                                                    expandedRowRender ? <span className='anticon anticon-plus' onClick={(e) => show(e, item)}>+</span> :
                                                        radio ? <input className="radio" type="radio" /> :
                                                            checked ? <input className="concis-checkbox noActived" type="checkbox" onChange={() => { Check() }} /> : <></>

                                                }

                                            </td> : <></>}

                                        <td style={{ textAlign: (align as any) || 'left' }}>{item.name}</td>
                                        <td className={align} style={{ textAlign: (align as any) || 'left' }}>{item.salary}</td>
                                        <td className={align} style={{ textAlign: (align as any) || 'left' }}>{item.address}</td>
                                        <td className={align} style={{ textAlign: (align as any) || 'left' }}>{item.email}</td>
                                    </tr>
                                    {
                                        expandedRowRender ?
                                            <tr style={{ textAlign: (align as any) || 'left', display: 'none' }}>
                                                <td colSpan={6}>{expandedRowRender(item)}</td>
                                            </tr> : <></>
                                    }
                                </React.Fragment>


                            )
                        })
                    }
                </tbody>
            </table >

            {
                pagination ? <Pagination
                    totalNumber={57}
                    pageSize={1}
                    currentPage={10}
                    middlePage={6}
                    onChange={handleChange}
                    showPages
                    showGo
                    showPrev
                    showNext
                /> : <></>
            }
        </div >
    )
}
