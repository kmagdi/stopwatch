import React, { useReducer,createContext,useEffect } from 'react'

const initialState={
    isRunning: false,
    time:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'start':
            return {...state,isRunning: true}
        case 'stop':
            return {...state,isRunning: false}
        case 'reset':
            return {isRunning: false,time:0}
        case 'tick':
            return {...state,time:state.time+1}
        default:
            return state;
    }
}
export const TimeContext=createContext(initialState)

export const TimeProvider=({children})=> {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        if(!state.isRunning)
            return
        const idRef=setInterval(()=>{dispatch({type:'tick'})},1000)
        return ()=>{
            clearInterval(idRef)
        }
    },[state.isRunning])

    function start(){
        dispatch({type:'start'})
    }
    function stop(){
        dispatch({type:'stop'})
    }
    function reset(){
        dispatch({type:'reset'})
    }
     return (
    <TimeContext.Provider value={{time:state.time,start,stop,reset}} >
      {children}
    </TimeContext.Provider>
  )
}
