import React from 'react'
import { ButtonStyled } from './Button.Styled'


export const Button = ({ children, variant = 'default', size = 'm', icon, className }) => {
    return (
        <ButtonStyled variant={variant} size={size} className={className}>
            {icon && icon}
            {children}
        </ButtonStyled>
    )
}
