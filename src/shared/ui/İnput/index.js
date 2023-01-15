import React from 'react'
import { InputComponent } from './Input.Styled'

export const CustomInput = ({
    type = 'default',
    placeholder,
    icon,
    rightSection,
    id,
    className,
    leftSection,
    radius = 8,
    required,
    size }) => {
    return (
        <InputComponent
            id={id}
            className={className}
            placeholder={placeholder}
            icon={icon}
            rightSection={rightSection}
            leftSection={leftSection}
            size={size}
            required={required}
            radius={radius}
            type={type}
        />
    )
}
