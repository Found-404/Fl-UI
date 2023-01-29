import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import './index.scss';
import { Props } from './inputnumber';

export default function InputNumber({
  disabled,
  min,
  max,
  step = 1,
  precision = 0,
  defaultValue,
  size,
  onChange,
}: Props) {
  const flInputNumberClassName = [
    'fl-inputNumber',
    disabled ? 'fl-disabled' : '',
    size === 'small' ? 'fl-inputNumber-sm' : '',
    size === 'large' ? 'fl-inputNumber-lg' : '',
  ];
  const val = useRef(null);
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  const [ltbool, setltBool] = useState(true);
  const [rtbool, setrtBool] = useState(true);

  const Decrease = () => {
    const Num = val.current.value * 1;
    if (Num <= min) return;
    setValue(Number((Num - step).toFixed(precision)));
  };
  const Increase = () => {
    const Num = val.current.value * 1;
    if (Num >= max) return;
    setValue(Number((Num + step).toFixed(precision)));
  };

  const inputChange = (tarVal: string) => {
    setValue(Number(tarVal));
  };

  useEffect(() => {
    value <= min ? setltBool(false) : setltBool(true);
    value >= max ? setrtBool(false) : setrtBool(true);
    onChange && value && onChange();
  }, [value]);
  return (
    <div className="fl-input-number">
      <div className={flInputNumberClassName.join(' ')}>
        <span
          className="fl-inputNumber-up fl-inputNumber-handler"
          onClick={!disabled && Decrease}
          style={ltbool ? { cursor: 'pointer' } : { cursor: 'not-allowed', color: '#ccc' }}
        >
          -
        </span>
        <input
          type="text"
          className="fl-inputNumber-input"
          value={`${value}`}
          ref={val}
          disabled={disabled}
          onChange={(event) => inputChange(event.target.value)}
        />
        <span
          className="fl-inputNumber-down fl-inputNumber-handler"
          onClick={!disabled && Increase}
          style={rtbool ? { cursor: 'pointer' } : { cursor: 'not-allowed', color: '#ccc' }}
        >
          +
        </span>
      </div>
    </div>
  );
}
