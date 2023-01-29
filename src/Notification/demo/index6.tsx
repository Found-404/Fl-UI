import React from 'react';
import { Notice } from 'react-view-design';
export default () => {
  return (
    <div>
      <Notice
        type="info"
        text="自定义样式"
        txt="自定义设置样式"
        style={{
          width: '500px',
          height: '300px',
          textAlign: 'center',
          fontSize: '26px',
        }}
      />
    </div>
  );
};
