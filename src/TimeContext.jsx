import React, { useReducer,createContext,useEffect } from 'react'

const initialState={
    isRunning: false,
    time:0
}

const reducer=(state,action)=>{
//action obj. egy olyan obj, amely leírja,h hogyan lehet a state-t módosítani
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
//ahányszor a state-t szeretnék módosítani a dispatch fg.segítségével tudjuk, átadva neki az action obj.-t
    useEffect(()=>{
        if(!state.isRunning)
            return
        const idRef=setInterval(()=>{dispatch({type:'tick'})},1000)
        return ()=>{
            clearInterval(idRef)
        }
    },[state.isRunning])
    
     return (
    <TimeContext.Provider value={[state,dispatch]} >
      {children}
    </TimeContext.Provider>
  )
}
