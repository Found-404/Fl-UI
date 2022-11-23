import React from 'react';
import { Steps } from 'react-view-design';

export default function index1() {
  let data = ['Waiting', 'In Process', 'Finished'];
  // 格式
  // let title = ['','','']; 传入方式和 data={data} || 相同
  // let explain = ['','',''];
  let pointerEvent = 'none'; // 传入none不可点击，其他所有字符串都可点击
  return (
    <>
      <Steps data={data} pointerEvent={pointerEvent} />
    </>
  );
}
