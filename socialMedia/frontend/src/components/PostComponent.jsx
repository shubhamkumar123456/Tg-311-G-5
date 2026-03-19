import React, { useState } from 'react'
import { FcAddImage } from "react-icons/fc";
import { BsEmojiLaughing } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';

const PostComponent = () => {

    const [show, setshow] = useState(false);
    console.log(show)

    function handleShowEmoji(){
        setshow(!show)
    }

  return (
    <div className='max-w-[500px]  p-5 rounded-2xl border  mx-auto my-6'>
        <div className=' flex  gap-3 items-center'>
            <textarea className='border rounded-2xl w-full p-2' placeholder='whats in your mind..?' name="" id=""></textarea>
            <button className='bg-green-900 text-white hover:bg-black px-4 py-2 rounded'>Post</button>
        </div>

        <div className='flex items-center gap-4 mt-3'>
            <input type="file" id='file' hidden/>

            <label htmlFor="file">
                <FcAddImage size={30}/>
            </label>

            <BsEmojiLaughing onClick={handleShowEmoji} size={25} color='blue'/>
        </div>

        <div>
            <EmojiPicker theme='dark' open={show}/>
        </div>
    </div>
  )
}

export default PostComponent
