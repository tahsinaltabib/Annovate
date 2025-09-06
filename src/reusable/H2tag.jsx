import React, { Children } from 'react'

const H2tag = ({className, children}) => {
  return (
    <h2 className={className}>
      {children}
    </h2>
  )
}

export default H2tag