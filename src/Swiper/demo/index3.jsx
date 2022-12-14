import React from 'react';
import { Swiper } from 'react-view-design';
import logo1 from '../images/swiper-img1.webp';
import logo2 from '../images/swiper-img2.webp';
import logo3 from '../images/swiper-img3.webp';
import logo4 from '../images/swiper-img4.webp';
import logo5 from '../images/swiper-img5.webp';

export default () => {
  let imgList = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div id="fl-Swiper">
      <Swiper imgList={imgList} width={800} height={400} deply={false} />
    </div>
  );
};
