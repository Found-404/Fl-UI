import React from 'react';
import { Select } from 'react-view-design';

export default () => {
  let option = [
    {
      label: 'Mucy',
      value: 'mucy',
    },
    {
      label: 'Mike',
      value: 'mike',
    },
    {
      label: 'aMck',
      value: 'amck',
    },
  ];

  return (
    <div>
      <Select option={option} placeholder={'请输入'} loading disable />
    </div>
  );
};
