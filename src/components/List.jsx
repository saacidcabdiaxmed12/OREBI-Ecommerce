import React from 'react'

const List = ({className,text}) => {
  return (
   <li className={`text-sm text-primary font-normal font-dm list-none hover:text-secondary
    duration-500 hover:font-bold ${className}`}>{text}</li>
  )
}

export default List