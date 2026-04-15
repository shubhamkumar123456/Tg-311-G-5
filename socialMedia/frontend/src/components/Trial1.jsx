import React, { useState } from 'react'

const Trial1 = () => {

   const [x, setx] = useState('');

    function handleSubmit(e){
   
    }

  return (
    <div>
        
      <input onChange={handleSubmit} type="text" id='name' />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Trial1
