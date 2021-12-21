/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import { CopyBlock, a11yLight } from 'react-code-blocks'
import { gsap } from 'gsap'
import { CopyBlockCodeSnippets } from '../../../utils'
import './_demo1.scss'

const Demo1 = () => {
  const demo1Ref = useRef()
  const q1 = gsap.utils.selector(demo1Ref)
  const code = CopyBlockCodeSnippets.demo1

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
        <p>
          GreenSock has many built-in features that help control the animations.
          The easiest way to look at it is to think about where the animation
          should start (<i>from</i>) and where it's going to end up (<i>to</i>),
          then decide on what it's going to do to get, and finally decide what
          it's going to do when it's finished.
        </p>
        <p>
          In this example you can see the{' '}
          <span className="greenSockGreen">boxes</span> sstart in their original
          rendered position to the left. Then they animate to the right. I've
          put this animation on repeat so it will never end, unlike the previous
          demo. As you can see we can animate pictures, elements, text, and even
          icons.
        </p>
        <CopyBlock
          language="javascript"
          text={code}
          showLineNumbers={true}
          theme={a11yLight}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  )
}

export default Demo1
