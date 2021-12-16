import React from 'react'

const SaveFile = ({ url, label, className }) => {
  return (
    <div>
      <a
        className={`btn btn-sm btn-info text-white ` + className}
        href={url}
        download
      >
        {label ? label : 'Download'}
      </a>
    </div>
  )
}

export default SaveFile

/* 

<SaveFile url='url_string_required.com' label='optional'

*/
