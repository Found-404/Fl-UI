import React from 'react';
import './empty.scss';
import { Props } from './message/empty';

export default function Empty({ image, imageStyle, type, text, test }: Props) {
  let props = [
    image ? 'PRESENTED_IMAGE_SIMPLE' : 'PRESENTED_IMAGE_DEFAULT',
    imageStyle ? 'is-disable' : '',
    type ? 'fl-empty' + type : '',
    test ? 'fl-empty-description' + test : '',
    text,
  ];

  return (
    <section className="code-box">
      <div className="code-box-demo">
        <div className={'fl-empty' + type}>
          <div className={'fl-empty-imageEmpty' + image}></div>
          <div className={'fl-empty-description' + test}>{text}</div>
        </div>
      </div>
      <div className="code-box-meta"></div>
    </section>
  );
}
