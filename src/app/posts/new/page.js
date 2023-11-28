"use client"
import Button from '@/components/Button'
import React, { useState } from 'react'
const Posts = ({params}) => {
  const [form, setForm] = useState({
    title:'',
    author:'',
    body:''
  })

  const handleChange = (e) => {
    const id = e.target.id

    setForm({
      ...form,
      [id]:e.target.value
    })

  }

  const handleSubmit = async () =>{
    const response = await fetch('/api/posts/',{
      method:'POST',
      body: JSON.stringify(form)
    })

    const data = JSON.stringify(form)
    console.log(data)
  }

  return (
    <div className='flex flex-col gap-2' >
        Create Form Here
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' value={form.value} onChange={handleChange}></input>

        <label htmlFor='author'>Author</label>
        <input type='text' id='author' value={form.author} onChange={handleChange}></input>

        <label htmlFor='body'>Body</label>
        <input type='text' id='body' value={form.body} onChange={handleChange}></input>

        <Button text={"Button"} onClick={handleSubmit}/>
    </div>    
  )
}

export default Posts