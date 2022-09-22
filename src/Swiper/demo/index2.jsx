import React from 'react'
import Swiper from '../index'


export default () => {
    let imgList = [
        'http://concis.org.cn/images/swiper-img1.webp',
        'http://concis.org.cn/images/swiper-img2.webp',
        'http://concis.org.cn/images/swiper-img3.webp',
        'http://concis.org.cn/images/swiper-img4.webp',
        'http://concis.org.cn/images/swiper-img5.webp',
    ];

    return (
        <div id='fl-Swiper'>
            <Swiper
                imgList={imgList}
                width={600}
                height={300}
                deply={2000}
            />
        </div>
    )
}


