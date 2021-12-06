import React from 'react'
import ReactCountryFlag from 'react-country-flag'

// Source: https://github.com/danalloway/react-country-flag

const ReactCountryFlagComponent = ({ code }) => {
  let countryCode
  if (code === 'en' || 'en') {
    countryCode = 'US'
  } else {
    countryCode = code
  }

  return (
    <>
      <i className="fas fa-map-marker-alt" />
      <span> {countryCode} </span>
      <sup>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{
            height: '1.25rem',
          }}
        />
      </sup>
    </>
  )
}

export default ReactCountryFlagComponent
