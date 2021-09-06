import { colors, spacing } from '@/variables/global'
import React from 'react'

const ActionButton = ({ children, handleClick, ...rest }) => (
  <>
    <button onClick={handleClick} {...rest} className="animated-hover">
      {children}
    </button>
    <style jsx>{`
      button {
        background: transparent;
        border: 1px solid ${colors.primary};
        color: ${colors.primary};
        font-family: sans-serif;
        letter-spacing: 0.035rem;
        overflow: hidden;
        padding: ${spacing.spacing02} ${spacing.spacing06};
        position: relative;
        text-transform: uppercase;
      }

      button:hover {
        border-color: ${colors.ternary};
        color: #f4f4f4;
      }
    `}</style>
  </>
)

export default ActionButton
