import React,{useContext} from 'react'
import { TimeContext } from './TimeContext'

export const Watch=()=> {
    const [state,dispatch]=useContext(TimeContext)

  return (
    <>
        <div className="holder">{state.time}</div>
        <div className="btn-holder">
            <div className="btn btn-outline-primary m-2" onClick={()=>dispatch({type:'start'})}>
                Start
            </div>
            <div className="btn btn-outline-success m-2" onClick={()=> dispatch({type:'stop'})}>
                Stop
            </div>
            <div className="btn btn-outline-secondary m-2" onClick={()=>dispatch({type:'reset'})}>
                Reset
            </div>
       </div>
    </>
  )
}
