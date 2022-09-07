import React from 'react'
import FlComment from '..'

export default () => {
  let date = new Date();
  let time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  // console.log(time);
  const actions = (
    <ul>
      <li>
        <span>Reply</span>
      </li>
    </ul>)
    const commentData = {
      actions,
    };
  return (
    <div>
      <FlComment
        author='李金帅'
        datetime={time}
        content='智游最帅非我李金帅莫属' {...commentData}>
          
        <FlComment
          avatar='http://concis.org.cn/images/swiper-img2.webp'
          author='李四'
          datetime={time} content='老哥666' {...commentData}>
          <FlComment 
          avatar='http://concis.org.cn/images/swiper-img3.webp' {...commentData}/>
          <FlComment 
          avatar='http://concis.org.cn/images/swiper-img4.webp' {...commentData}/>
        </FlComment>
      </FlComment>
    </div>
  )
}