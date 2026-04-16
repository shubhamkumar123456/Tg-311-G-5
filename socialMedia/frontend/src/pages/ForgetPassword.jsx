import React, { useRef } from 'react'

const ForgetPassword = () => {

    let inputRef = useRef() //{current:undefined} ,{current:<input/>}

    async function handleSubmit(){
        let obj = {
            email:inputRef.current.value
        }

        console.log(obj)

        let res = await fetch('http://localhost:8090/users/forgetpassword',{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        let data = await res.json();
        console.log(data)
    }

  return (
    <div className='h-[70vh] flex justify-center flex-col gap-3 items-center'>
        <h1>Forget password page</h1>
        <div className='flex items-center justify-center gap-3'>
            <input ref={inputRef} className='outline-none rounded border p-2 text-black' type="email" placeholder='enter your email' />
            <button onClick={handleSubmit} className='bg-green-950 text-white hover:bg-green-600 px-4 py-1 rounded'>submit</button>
        </div>
    </div>
  )
}

export default ForgetPassword
