import React from 'react'

const Images = ({src,className,alt}) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Images