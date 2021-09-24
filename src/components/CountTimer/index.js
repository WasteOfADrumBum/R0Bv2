import React, { useEffect, useState } from 'react'

function CountTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(`2020-6-7`)
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        years: Math.floor(difference / 31557600000),
        months: Math.floor((difference / 2629800000) % 12),
        weeks: Math.floor((difference / 604800016.56) % 4),
        days: Math.floor((difference / 86400000) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const timerComponents = []

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }
    timerComponents.push(
      <span className="d-inline" key={interval + 'time'}>
        {timeLeft[interval]}&thinsp;{interval}&thinsp;
      </span>,
    )
  })

  return (
    <div className="coutTimer">
      {timerComponents.length ? timerComponents : <span>That's Time!</span>}
    </div>
  )
}

export default CountTimer
