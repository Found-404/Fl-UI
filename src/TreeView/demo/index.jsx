import React from 'react';
import { Treeview } from 'react-view-design';

const treeData = [
  {
    title: 'parent1',
    value: '0-0',
    group: 0,
    children: [
      {
        title: 'parent 1-0',
        value: '0-0-1',
        group: 0,
      },
      {
        title: 'parent 1-1',
        value: '0-0-2',
        group: 0,
        children: [
          {
            title: 'leaf2',
            value: '0-0-0-1',
            group: 0,
          },
          {
            title: 'leaf3',
            value: '0-0-0-1',
            group: 0,
            children: [
              {
                title: 'fengxin',
                value: '0-0-0-1',
                group: 0,
                children: [
                  {
                    title: 'dashuaige',
                    value: '0-0-0-1',
                    group: 0,
                  },
                ],
              },
            ],
          },
          {
            title: 'leaf4',
            value: '0-0-0-1',
            group: 0,
          },
        ],
      },
    ],
  },
  {
    title: 'parent2',
    value: '0-1',
    group: 1,
    children: [
      {
        title: 'parent 2-0',
        value: '0-0-3',
        group: 1,
      },
      {
        title: 'parent 2-1',
        value: '0-0-3',
        group: 1,
      },
    ],
  },
];

export default () => {
  const callback = (va) => {
    console.log(va);
  };

  return (
    <div style={{ display: 'flex', gap: '10px 10px', flexWrap: 'wrap' }}>
      <Treeview treeData={treeData} callback={callback} />
    </div>
  );
};
