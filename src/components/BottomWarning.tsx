import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({to,buttonText,label}) => {
  return (
    <div className='flex gap-2'>
       <div>{label}</div>
       <Link className="pointer underline pl-1 cursor-pointer hover:text-blue-700 duration-150" to={to}>      
        {buttonText}
       </Link>
    </div>
  )
}

export default BottomWarning
