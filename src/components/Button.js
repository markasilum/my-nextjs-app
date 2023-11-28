import React from 'react'

const Button = ({onClick, className, text}) => {
  return (
    <button onClick={onClick} className={`${className} bg-slate-400 px-4 py-2 w-40 `}>{text}</button>
  )
}

export default Button