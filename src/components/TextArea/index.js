import React from 'react'
import './_textArea.scss'

const TextArea = ({
  name,
  placeholder,
  label,
  value,
  info,
  onChange,
  rows,
  className,
  disabled,
}) => {
  return (
    <div className="textArea my-2">
      {label && <div className="label">{label}</div>}
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={className || ''}
        disabled={disabled}
      />
      {info && (
        <small className="info">
          <i>{info}</i>
        </small>
      )}
    </div>
  )
}

export default TextArea
