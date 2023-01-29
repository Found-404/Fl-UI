import React from 'react';
import { Steps } from 'react-view-design';
export default function index4() {
  let data = ['Waiting', 'In Process', 'Finished'];
  let title = ['subTitle', 'subTitle', 'subTitle'];
  let explain = ['this is description', 'this is description', 'this is description'];
  let pointerEvent = 'auto';
  return (
    <>
      <Steps data={data} title={title} explain={explain} pointerEvent={pointerEvent} />
    </>
  );
}
