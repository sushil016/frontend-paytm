import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({to,buttonText,label}) => {
  return (
    <div>
       <div>{label}</div>
       <Link className="pointer underline pl-1 cursor-pointer" to={to}>      
        {buttonText}
       </Link>
    </div>
  )
}

export default BottomWarning
