import React, { useRef, useState } from 'react'
import { FcAddImage } from "react-icons/fc";
import { BsEmojiLaughing } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import { toast } from 'react-toastify';

const PostComponent = (props) => {
    console.log(props)
    const [image, setimage] = useState('');
    const [show, setshow] = useState(false);

    let titleRef = useRef();
    let token = localStorage.getItem('g5Token');

    function handleShowEmoji() {
        setshow(!show);
    }

    function handleEmoji(e) {
        let title = titleRef.current.value;
        titleRef.current.value = title + e.emoji;
    }

    const handleInputChanger = (e) => {
        setimage(e.target.files[0]);
    }

    async function handleSubmit() {
        let formData = new FormData();
        formData.append('title', titleRef.current.value);
        formData.append('image', image);

        let res = await fetch('https://socialmediag5.onrender.com/posts/create', {
            method: 'POST',
            headers: {
                authorization: token
            },
            body: formData
        });

        let data = await res.json();

        if (res.status == 200 || res.status == 201) {
            toast.success(data.msg);
            titleRef.current.value = '';
            setimage('');
            props.getAllProducts()
        } else {
            toast.error(data.msg);
        }
    }

    return (
        <div className='max-w-[550px] bg-white shadow-lg rounded-2xl mx-auto mt-6 p-4 border relative'>

            {/* Top Section */}
            <div className='flex gap-3 items-start'>
                
                {/* Avatar */}
                <img
                    src='https://i.pravatar.cc/50'
                    alt=''
                    className='w-12 h-12 rounded-full'
                />

                {/* Textarea */}
                <textarea
                    ref={titleRef}
                    rows="3"
                    className='w-full bg-gray-100 rounded-2xl p-3 outline-none resize-none'
                    placeholder="What's on your mind?"
                />
            </div>

            {/* Image Preview */}
            {image && (
                <div className='mt-4'>
                    <img
                        src={URL.createObjectURL(image)}
                        alt=''
                        className='w-full max-h-[400px] object-cover rounded-xl'
                    />
                </div>
            )}

            {/* Divider */}
            <hr className='my-4' />

            {/* Bottom Actions */}
            <div className='flex justify-between items-center'>

                <div className='flex gap-6 items-center'>

                    <input
                        onChange={handleInputChanger}
                        type="file"
                        id='file'
                        hidden
                    />

                    <label
                        htmlFor="file"
                        className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg'
                    >
                        <FcAddImage size={28} />
                        <span className='text-gray-600 font-medium'>Photo</span>
                    </label>

                    <div
                        onClick={handleShowEmoji}
                        className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg'
                    >
                        <BsEmojiLaughing size={24} color='orange' />
                        <span className='text-gray-600 font-medium'>Feeling</span>
                    </div>

                </div>

                <button
                    onClick={handleSubmit}
                    className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold'
                >
                    Post
                </button>

            </div>

            {/* Emoji Picker */}
            {show && (
                <div className='absolute top-[220px] left-10 z-50'>
                    <EmojiPicker onEmojiClick={handleEmoji} theme='light' />
                </div>
            )}

        </div>
    )
}

export default PostComponent