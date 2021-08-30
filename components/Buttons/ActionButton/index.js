import { colors, spacing } from '@/variables/global'
import React from 'react'

const ActionButton = ({ children, handleClick, ...rest }) => {
  return (
    <>
      <button onClick={handleClick} {...rest} className="animated-hover">
        {children}
      </button>
      <style jsx>{`
        button {
          background: transparent;
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
          overflow: hidden;
          padding: ${spacing.spacing02} ${spacing.spacing06};
          position: relative;
        }

        button:hover {
          border-color: ${colors.ternary};
          color: #f4f4f4;
        }
      `}</style>
    </>
  )
}

export default ActionButton
