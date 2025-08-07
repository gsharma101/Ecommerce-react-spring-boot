import React from 'react'

interface PromptMessageProps{
    message:string,
    index:number
}
const PromptMessage = ({message,index}:PromptMessageProps) => {
  return (
    <div className='px-3 py-4'>{message} - {index}</div>
  )
}

export default PromptMessage