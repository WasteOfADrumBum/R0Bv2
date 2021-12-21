import React from 'react'
import $ from 'jquery'
import './_scrollToTop.scss'

const ScrollToTop = () => {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  }

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 20) {
      $('#scrollToTopBtn').addClass('d-block').removeClass('d-none')
    } else {
      $('#scrollToTopBtn').addClass('d-none').removeClass('d-block')
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <>
      <button
        onClick={() => topFunction()}
        id="scrollToTopBtn"
        title="Go to top"
        className="btn btn-outline-danger"
      >
        <i className="bi bi-chevron-double-up" />
      </button>
    </>
  )
}

export default ScrollToTop
