import React from 'react'

const Dummy = () => {

        let x=10

    const [y, sety] = useState(10);
    
    function handleSubmit(){
         x++
    }

  return (
    <div>
      <input id='name' type="text" />
      <button onClick={handleSubmit}>submit</button>

      <p>{x}</p>
    </div>
  )
}

export default Dummy
