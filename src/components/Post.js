import React from 'react'
import Button from './Button'

const Post = ({title, author, body}) => {
  return (
    <div className='border border-gray-100 p-4 flex flex-col'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <span className='text-lg'>by {author}</span>
        <p className='text-base'>{body}</p>
        <Button text={"Button"}></Button>
    </div>
  )
}

export default Post