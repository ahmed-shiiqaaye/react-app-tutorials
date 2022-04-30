import React from 'react'
import { StyledButton } from './Button.style'

function Button({ text , bg , color}) {
  return (
    <>
    <StyledButton bg={bg} color={color}>{text }</StyledButton>
    </>
  )
}

export default Button