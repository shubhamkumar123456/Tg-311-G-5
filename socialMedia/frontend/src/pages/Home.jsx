
import React from 'react'
import PostComponent from '../components/PostComponent'

const Home = () => {
    let token = localStorage.getItem('g5Token')
    console.log(token)


  return (
    <div>
        <PostComponent/>
        <h1>THis is Home Page</h1>
    </div>
  )
}

export default Home
