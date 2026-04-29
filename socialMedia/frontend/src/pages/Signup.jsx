import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    let nameRef = useRef();    //{current:undefined}
    let emailRef = useRef();
    let passwordRef = useRef();
    let navigate = useNavigate();



   async function handleSubmit(e){
        e.preventDefault();

        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        console.log(obj)

        let res = await fetch('https://socialmediag5.onrender.com/users/signup',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data)

        if(res.status==200 || res.status==201){
                alert(data.msg)
                navigate('/login')
        }
        else{
            alert(data.msg)
        }
          //{msg:user registered successfully} 
    }

  return (
    <div>
        <form action="" className='flex flex-col border w-[50%] max-w-[450px] m-auto mt-8 p-8 gap-4 rounded'>
            <label htmlFor="">Name</label>
            <input ref={nameRef} className='border px-2 py-1 rounded' type="text" placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input ref={emailRef} className='border px-2 py-1 rounded' type="email" placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input ref={passwordRef} className='border px-2 py-1 rounded' type="password" placeholder='enter your password' />

            <button onClick={handleSubmit} className='bg-black text-white hover:bg-[#211e1e] p-4'>Signup</button>
        </form>
    </div>
  )
}

export default Signup
