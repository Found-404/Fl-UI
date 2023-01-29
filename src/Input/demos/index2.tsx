import React from 'react';
import Input from '..';

export default function InputProDemo1() {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Input disabled onChange={onChange} />
    </div>
  );
}
