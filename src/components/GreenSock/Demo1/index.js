/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './_demo1.scss'

const Demo1 = () => {
  /* --- || DEMO 1 || --- */
  const demo1Ref = useRef()
  const q1 = gsap.utils.selector(demo1Ref)

  const Box = ({ children }) => {
    return <div className="demo1Box p-2 m-3">{children}</div>
  }

  const Container = ({ children }) => {
    return (
      <div>
        <Box>
          <i className="bi bi-suit-heart-fill" />
        </Box>
      </div>
    )
  }

  useEffect(() => {
    // Target any descendant with the class of .demo1Box - no matter how far down the descendant tree.
    // Uses demo1Ref.current.querySelectorAll() internally
    gsap.to(q1('.demo1Box'), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    })
  }, [])

  return (
    <div className="demo1Container d-md-inline-flex my-5">
      <div className="demo1 p-2 pe-5 me-5" ref={demo1Ref}>
        <Box>I</Box>
        <Container />
        <Box>
          <img
            src="./assets/images/greensock-logo.png"
            alt="GSAP Logo"
            className="gsapLogo"
          />
        </Box>
      </div>
      <div className="demo1Desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  )
}

export default Demo1
