import { useMemo, useState, useEffect } from 'react'
import coutdownStyle from './coutdown.module.scss'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export const CountDown = ({ deadline = new Date().toString() }: { deadline: string }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline])
  const [time, setTime] = useState(0)

  useEffect(() => {
    // set coutdown if deadline is not late
    if (parsedDeadline - Date.now() > 0) setTime(parsedDeadline - Date.now())
    //setInterval  if deadline set coutdown if not set to null
    const interval = setInterval(
      () => (parsedDeadline - Date.now() > 0 ? setTime(parsedDeadline - Date.now()) : setTime(0)),
      1000,
    )

    return () => clearInterval(interval)
  }, [parsedDeadline])

  const labelTh = ['วัน', 'ชั่วโมง', 'นาที', 'วินาที']
  return (
    <div className={coutdownStyle.container}>
      {Object.entries({
        0: time / DAY,
        1: (time / HOUR) % 24,
        2: (time / MINUTE) % 60,
        3: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className={coutdownStyle.box}>
          {/* Time */}
          <div className="">
            <p>{`${Math.floor(value)}`}</p>
          </div>
          {/* Label Days/Hours */}
          <span>{labelTh[parseInt(label)]}</span>
        </div>
      ))}
    </div>
  )
}
