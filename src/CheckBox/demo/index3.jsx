import React from 'react';
import { CheckBox } from 'react-view-design';

export default () => {
  return (
    <div className="fl-checkBoxGroup-one">
      <CheckBox text="Apple" />
      <CheckBox text="Orange" />
      <CheckBox text="Strawberry" disabled />
    </div>
  );
};
