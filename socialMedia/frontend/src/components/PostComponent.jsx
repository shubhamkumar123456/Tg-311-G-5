import React, { useRef, useState } from 'react'
import { FcAddImage } from "react-icons/fc";
import { BsEmojiLaughing } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import { toast } from 'react-toastify';

const PostComponent = () => {
     const [image, setimage] = useState('');
    let titleRef = useRef()  //{current:undefined}   , {current:<textarea/>}

    let token  = localStorage.getItem('g5Token')

    const [show, setshow] = useState(false);
    // console.log(show)

    function handleShowEmoji(){
        setshow(!show)

    }

    function handleEmoji(e){
        // console.log(e) // {}
                // console.log(e.emoji)
                let title = titleRef.current.value;
                // console.log(title);

                let ans = title + e.emoji;
                // console.log(ans)
                titleRef.current.value = ans
    }

   

    const handleInputChanger = (e)=>{
            console.log(e.target)  // tag  --> input
            console.log(e.target.files)  // filelist --> {0:firstFileObj, 1:secondFileObj, 2:thirdFileObj};
            console.log(e.target.files[0])  // real file object
            setimage(e.target.files[0])
    }


   async function handleSubmit(){
        let formData = new FormData() //  {}
        formData.append('title', titleRef.current.value)
        formData.append('image', image)

        let res = await fetch('http://localhost:8090/posts/create',{
            method:'POST',
            headers:{
                'authorization':token
            },
            body:formData
        })

        let data = await res.json();
        console.log(data)

        if(res.status == 200 || res.status== 201){
            toast.success(data.msg)
            titleRef.current.value = ''
            setimage('')
        }
        else{
            toast.error(data.msg)
        }
    }

  return (
    <div className='max-w-[500px]  p-5 rounded-2xl border  mx-auto my-6'>
        <div className=' flex  gap-3 items-center'>
            <textarea ref={titleRef} className='border rounded-2xl w-full p-2' placeholder='whats in your mind..?' name="" id=""></textarea>
            <button onClick={handleSubmit} className='bg-green-900 text-white hover:bg-black px-4 py-2 rounded'>Post</button>
        </div>

        <div className='flex items-center gap-4 mt-3'>
            <input onChange={handleInputChanger} type="file" id='file' hidden/>

            <label htmlFor="file">
                <FcAddImage size={30}/>
            </label>

            <BsEmojiLaughing onClick={handleShowEmoji} size={25} color='blue'/>
        </div>

        <div>
           { image && <img className='w-[250px] h-[250px]' src={URL.createObjectURL(image)} alt="" />}
           
        </div>

        <div>
            <EmojiPicker onEmojiClick={handleEmoji} theme='dark' open={show}/>
        </div>
    </div>
  )
}

export default PostComponent
