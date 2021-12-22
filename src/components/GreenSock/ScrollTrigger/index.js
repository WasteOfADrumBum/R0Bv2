/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './_scrollTrigger.scss'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    author: 'Monty Python and the Holy Grail (1975)',
    quote: "It's just a flesh wound.",
  },
  {
    author: 'Deadpool (2016)',
    quote:
      "I'm about to do to you what Limp Bizkit did to music in the late '90s.",
  },
  {
    author: 'The Incredibles (2004)',
    quote:
      "'Greater good?' I am your wife! I'm the greatest good you're ever gonna get!",
  },
  {
    author: 'The Godfather (1972)',
    quote: 'Leave the gun. Take the cannoli.',
  },
]

const ScrollTriggerComponent = () => {
  const headerRef = useRef(null)
  const revealRefs = useRef([])
  revealRefs.current = []

  gsap.config({
    // https://greensock.com/forums/topic/22491-gsap3-target-object-not-found/
    nullTargetWarn: false,
  })

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    })

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <div className="scrollTrigger my-5">
      <div className="row">
        <div className="col-md-12 mb-5 text-center">
          <div className="text-center text-info">
            <i className="bi bi-info-circle-fill mx-1" />
            <i>Scroll down to see sections being revealed by ScrollTrigger.</i>
          </div>
        </div>
        <div className="col-md-4">
          <main className="main d-flex flex-column align-items-center">
            {sections.map(({ author, quote }) => (
              <div
                className="section mb-3 border-bottom"
                key={author}
                ref={addToRefs}
              >
                <i className="fs-5">"{quote}"</i>
                <p className="ms-2">- {author}</p>
              </div>
            ))}
          </main>
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h3>ScrollTrigger</h3>
          <p>
            One of GreenSock's best animations has to be ScrollTrigger.
            ScrollTrigger creates jaw-dropping scroll-based animations with
            minimal code or trigger anything scroll-related, even if it has
            nothing to do with animation. It's an easy way to add subtle effects
            to a website to really make things pop!
          </p>
          <p>
            As you can demo by scrolling it can be used to fade in/out various
            elements like pictures or text that makes the user feel like the
            page is coming alive. You can even add custom styling to it using
            CSS or SASS. One of the most popular uses is its ability to have
            images apear like they're settling into place as they scroll into
            view
          </p>
        </div>
      </div>
    </div>
  )
}

export default ScrollTriggerComponent
