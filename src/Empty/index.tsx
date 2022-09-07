import React from 'react';
import './empty.scss';
import { Props } from './message/empty';

export default function Empty({ image, imageStyle, type, text, test }: Props) {
  let props = [
    image ? 'PRESENTED_IMAGE_SIMPLE' : 'PRESENTED_IMAGE_DEFAULT',
    imageStyle ? 'is-disable' : '',
    type ? 'ant-empty' + type : '',
    test ? 'ant-empty-description' + test : '',
    text,
  ];

  return (
    <section className="code-box">
      <div className="code-box-demo">
        <div className={'ant-empty' + type}>
          <div className={'ant-empty-imageEmpty' + image}></div>
          <div className={'ant-empty-description' + test}>{text}</div>
        </div>
      </div>
      <div className="code-box-meta"></div>
    </section>
  );
}
