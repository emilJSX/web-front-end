import React from 'react'
import { OutlinedButtonStyle } from './OutlineButton.Styled'

export const OutlinedButton = ({ children, width, height }) => {
    return (
        <OutlinedButtonStyle>{children}</OutlinedButtonStyle>
    )
}
