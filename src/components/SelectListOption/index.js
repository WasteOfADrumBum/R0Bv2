import React from 'react'
import Select from 'react-select'

const SelectListOption = ({
  name,
  value,
  info,
  onChange,
  options,
  placeholder,
  customStyles,
  className,
  label,
  isDisabled,
}) => {
  const styles = customStyles
    ? customStyles
    : {
        control: (provided) => ({
          ...provided,
          padding: '0px',
          backgroundColor: '#eeeeee',
          border: '2px solid #343434',
          borderRadius: '3px',
          maxWidth: '100%',
        }),
        option: (provided) => ({
          ...provided,
          padding: '6px',
          backgroundColor: '#eeeeee',
          maxWidth: '100%',
          borderRadius: 3,
        }),
        menu: (provided) => ({
          ...provided,
          border: '1px solid #005cb9',
          borderRadius: '3px',
          maxWidth: '100%',
        }),
      }

  return (
    <div className="component selectListOption my-2">
      {label && <label className="label">{label}</label>}
      <Select
        options={options}
        isDisabled={isDisabled}
        components={{
          DropdownIndicator: () => {
            return (
              <svg height="10" width="20">
                <polyline
                  points="1,1 5,5 10,1"
                  fill="none"
                  stroke="#999999"
                  strokeWidth="2"
                />
                <polyline
                  points="1,5 5,10 10,5"
                  fill="none"
                  stroke="#999999"
                  strokeWidth="2"
                />
              </svg>
            )
          },
        }}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`react-select-container ${className || ''}`}
        classNamePrefix="react-select"
        onChange={(e) =>
          onChange({
            target: {
              name: name,
              value: e.value,
            },
          })
        }
        styles={styles}
      />
      {info && <small className="info">{info}</small>}
    </div>
  )
}

export default SelectListOption
