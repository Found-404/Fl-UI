import React, { useRef, useState, useEffect } from 'react';
import { Props } from './input';
import './style.scss';

export default function InputPro({
  disabled,
  prefix,
  suffix,
  defaultValue,
  onChange,
  placeholder,
}: Props) {
  let props = ['fl-input', disabled ? 'fl-input-disabled' : ''];
  const val = useRef(null);
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  useEffect(() => {
    onChange && value && onChange(value);
  }, [value]);
  const inputChange = (tarVal: string) => {
    setValue(tarVal);
  };
  return (
    <div>
      {prefix || suffix ? (
        <div className="fl-input-wrapper">
          <span className="fl-input-prefix">{prefix}</span>
          <input
            type="text"
            className={props.join(' ')}
            disabled={disabled}
            defaultValue={defaultValue}
            ref={val}
            onChange={(event) => inputChange(event.target.value)}
            placeholder={placeholder}
          />
          <span className="fl-input-prefix">{suffix}</span>
        </div>
      ) : (
        <input
          type="text"
          ref={val}
          className={props.join(' ')}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={(event) => inputChange(event.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
