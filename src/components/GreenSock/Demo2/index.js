/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './_demo2.scss'

const Demo2 = () => {
  const demo2Ref = useRef()
  const [count, setCount] = useState(0)
  const q2 = gsap.utils.selector(demo2Ref)
  const [delayedCount, setDelayedCount] = useState(0)

  // only runs on first render
  useEffect(() => {
    gsap.to(q2('.box-1'), { rotation: '+=360' })
  }, [])

  // runs on first render and every time delayedCount changes
  useEffect(() => {
    gsap.to(q2('.box-2'), { rotation: '+=360' })
  }, [delayedCount])

  // runs on every render
  useEffect(() => {
    gsap.to(q2('.box-3'), { rotation: '+=360' })
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedCount(count)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="demo2Container my-5">
      <div className="demo2 p-2 w-100 text-center" ref={demo2Ref}>
        <div>
          <button
            className="btn btn-lg btn-outline-info mb-3"
            onClick={() => setCount(count + 1)}
          >
            Click to trigger a render
          </button>
        </div>
        <p>Renders: {count}</p>
        <p>Prop changes: {delayedCount}</p>
        <div className="d-flex flex-md-row w-100 justify-content-md-around align-items-md-center">
          <div className="demo2Box box-1">First render</div>
          <div className="demo2Box box-2">First render & prop change</div>
          <div className="demo2Box box-3">Every render</div>
        </div>
      </div>
      <div className="demo2Desc">
        Let me explain what's going on in this animation. The
        <span className="purple mx-1">Purple Box</span>animates when the page is
        first rendered after that you won't see it animate again. If you missed
        it just refresh this page. The
        <span className="blue mx-1">Blue Box</span>animates when the page is
        first rendered, but it also will trigger an animation when a prop is
        changed. You can trigger a prop change by clicking the button
        <span className="text-info mx-1">[Click to trigger a render]</span>
        above. The <span className="ruby mx-1">Ruby Box</span> will trigger
        every render. When you first load the page, when rendering the content
        again or when the prop is changed. You can also click the button
        <span className="text-info mx-1">[Click to trigger a render]</span>
        above to trigger it, but you'll notice it triggers on both the render
        and the prop change.
      </div>
    </div>
  )
}

export default Demo2
