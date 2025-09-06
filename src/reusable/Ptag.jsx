import React, { Children } from 'react'

const Ptag = ({className, children}) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
}

export default Ptag