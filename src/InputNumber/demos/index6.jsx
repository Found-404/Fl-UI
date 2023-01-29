import React from 'react';
import InputNumber from '..';
export default () => {
  const onChange = () => {
    console.log(5);
  };
  return (
    <>
      <InputNumber size="small" />
      <br />
      <InputNumber onChange={onChange} />
      <br />
      <InputNumber size="large" />
    </>
  );
};
