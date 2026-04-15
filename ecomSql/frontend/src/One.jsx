import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const One = () => {
    

    let x = useRef() //{current:}
        
    // function handleSubmit(){
    //     console.log("hello")

    // }
    

    // function handleChanger(e){
    //     // console.log(e.target)
    //     // console.log(e.target.value)
    //     console.log(x.current.value)
    // }
  return (
    <div>
      <input ref={x}  onChange={handleChanger} type="text" id=''   />
      <button onClick={handleSubmit} >submit</button>
    </div>
  )
}

export default One
