import React from 'react'
import './_textField.scss'

const TextField = ({
  disabled,
  index,
  info,
  label,
  name,
  onChange,
  onKeyDown,
  onPaste,
  placeholder,
  type,
  value,
  className,
}) => {
  return (
    <div className="textField my-2">
      {label && <label className="label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        index={index}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        disabled={disabled}
        className={className || ''}
      />
      {info && <small className="info">{info}</small>}
    </div>
  )
}

export default TextField
