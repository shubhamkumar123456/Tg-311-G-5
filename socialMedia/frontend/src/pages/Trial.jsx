import React, { useRef } from 'react'

const Trial = () => {
    

  return (
    <div>
      


      <form action="post" >
        <input ref={x}  id='name' type="text"  name='name'/>
        <input  type="email"  name='email'/>
        <input type="password"  name='password' />
        <button onClick={handleSUbmit}>submit</button>
      </form>
    </div>
  )
}

export default Trial
