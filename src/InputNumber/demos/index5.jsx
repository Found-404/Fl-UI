import React from 'react';
import InputNumber from '..';
export default () => {
  return (
    <>
      <InputNumber defaultValue={0.01} precision={2} step={0.2} />
    </>
  );
};
