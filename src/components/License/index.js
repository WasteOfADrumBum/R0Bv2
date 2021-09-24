import React from 'react'
import './_license.scss'

const License = () => {
  return (
    <>
      <hr />
      <h2 className="my-5 text-center">Licensed To Code</h2>
      <div className="row text-left license mb-5">
        <div className="licenseHdr">
          <i className="fas fa-balance-scale me-1" />
          <div>
            This project is licensed under the
            <h5>
              <b>MIT License</b>
            </h5>
          </div>
        </div>
        <div className="licenseDesc">
          A short and simple permissive license with conditions only requiring
          preservation of copyright and license notices. Licensed works,
          modifications, and larger works may be distributed under different
          terms and without source code.
        </div>

        <div className="permissions">
          <p>
            <b>Permissions</b>
          </p>
          <p>
            <i className="fas fa-check me-1" />
            Commercial use
          </p>
          <p>
            <i className="fas fa-check me-1" />
            Modification
          </p>
          <p>
            <i className="fas fa-check me-1" />
            Distribution
          </p>
          <p>
            <i className="fas fa-check me-1" />
            Private use
          </p>
        </div>
        <div className="limitations">
          <p>
            <b>Limitations</b>
          </p>
          <p>
            <i className="fas fa-times me-1" />
            Liability
          </p>
          <p>
            <i className="fas fa-times me-1" />
            Warranty
          </p>
        </div>
        <div className="conditions">
          <p>
            <b>Conditions</b>
          </p>
          <p>
            <i className="fas fa-info-circle me-1" />
            License and copyright notice
          </p>
        </div>
      </div>
    </>
  )
}

export default License
