/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {} from '../../components'
import TitlebarImageList from './ImageList'
import ImageMasonry from './Masonry'
import './_mui.scss'

const MUI = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 768
        if (ismobile !== isMobile) setIsMobile(ismobile)
      },
      false,
    )
  }, [isMobile])

  return (
    <div className="mui my-5">
      <div className="row align-items-center">
        <div className="col-md-4">
          <h2 className="text-center d-grid mb-5 muiHdr ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 36 32"
              fill="none"
              className="css-1170n61 muiLogo m-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#007FFF"
              ></path>
            </svg>
            <div className="muiHdr">MUI</div>
            <div className="muiSubHdr fs-6">
              The React <span className="muiBlue">UI library</span> you always
              wanted
            </div>
          </h2>
        </div>
        <div className="col-md-4">
          <div className="installMUI my-2 d-grid">
            <hr className="muiBlue" />
            <i className="text-center">We can use NPM to install MUI.</i>
            <code className="installNPM text-left p-2 m-auto text-white bg-dark rounded">
              npm install @mui/material @emotion/react @emotion/styled
              <span className="blinkingText">|</span>
            </code>
            <hr className="muiBlue" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="muiIntro my-2">
            MUI provides a robust, customizable, and accessible library of
            foundational and advanced components, enabling you to build your own
            design system and develop React applications faster. MUI Core is a
            contuniously growing list of components, ready-to-use, free forever
            and with accessibility always in mind. They've built the
            foundational UI blocks for your design system so you don't have to.
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-4 d-flex justify-content-center">
          <TitlebarImageList />
        </div>
        <div className="col-md-4 text-center">
          <p>
            As a Professional Photographer I appreciate the way photos can be
            laid out on a website. Two of my favorite MUI features are they're
            Image List and Masonry components.
          </p>
          <div className="text-start">
            <h4>
              <i
                className={`bi ${
                  isMobile ? 'bi-arrow-up' : 'bi-arrow-left'
                } mx-2`}
              />
              Image List
            </h4>
            <p>
              Image lists display a collection of images in an organized grid.
              Image lists represent a collection of items in a repeated pattern.
              They help improve the visual comprehension of the content they
              hold. This example demonstrates the use of the ImageListItemBar to
              add an overlay to each item. The overlay can accommodate a title,
              subtitle and secondary action.
            </p>
          </div>
          <div className="text-end">
            <h4>
              Masonry
              <i
                className={`bi ${
                  isMobile ? 'bi-arrow-down' : 'bi-arrow-right'
                } mx-2`}
              />
            </h4>
            <p>
              Masonry lays out contents of different sizes as blocks of the same
              width and variable height with configurable gaps. Masonry
              maintains a list of content blocks with a consistent width but
              variable height. The contents are ordered by row. If a row is
              already filled with the specified number of columns, the next item
              starts another row, and it is added to the shortest column.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <ImageMasonry />
        </div>
      </div>
    </div>
  )
}

export default MUI
