import React from 'react';
import Input from '..';

export default function InputProDemo1() {
  return (
    <div style={{ width: '30%' }}>
      <Input prefix="￥" suffix="RMB" placeholder="15155" />
      <br />
      <Input prefix="$" suffix="$" />
      <br />
      <Input prefix="email" suffix="@qq.com" />
    </div>
  );
}
