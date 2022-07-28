import React,{useContext} from 'react'
import { TimeContext } from './TimeContext'


export const Watch=()=> {
    const {time,start,stop,reset}=useContext(TimeContext)
  return (
    <>
        <div className="holder">{time}</div>
        <div className="btn-holder">
            <div className="btn btn-outline-primary m-2" onClick={()=>start()}>
                Start
            </div>
            <div className="btn btn-outline-success m-2" onClick={()=>stop()}>
                Stop
            </div>
            <div className="btn btn-outline-secondary m-2" onClick={()=>reset()}>
                Reset
            </div>
       </div>
    </>
  )
}
