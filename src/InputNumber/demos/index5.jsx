import React from 'react';
import { InputNumber } from 'react-view-design';
export default () => {
  return (
    <>
      <InputNumber numb={0.01} precision={2} step={0.2} />
    </>
  );
};
