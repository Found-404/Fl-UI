import React, { useEffect } from 'react';
import { Props } from './backtop';
import $ from "jquery";

export default function BackTop({ children, duration, target, visibilityHeight }: Props) {
    // 得到返回顶部所需的时间
    const newduration = duration ? duration : 450;
    // 点击返回顶部
    var backTop = () => {
        $(target.current).animate({ scrollTop: 0 }, newduration)
    }
    
    // 控制在滚动条一定高度下点击块显示，隐藏
    useEffect(() => {
        if(target){
            // 给滚动条元素添加滚动监听
            target.current?.addEventListener('scroll', () => {
                var scrollTop:any = target.current?.scrollTop;
                // 添加防抖
                var flag=true;
                if(flag){
                    setTimeout(()=>{
                        flag=false;
                    },600)
                    if(scrollTop>visibilityHeight){
                        $('.fl-back-top').fadeIn(600);
                    }else{
                        $('.fl-back-top').fadeOut(600);
                    }
                }
               
            })
        }
    })

    return (
        <div className='fl-back-top' onClick={backTop}>
            {children}
        </div>
    )
}
