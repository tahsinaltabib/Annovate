import React from 'react'

const Imgae = ({src, alt, className}) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Imgae