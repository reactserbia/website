import { ReactNode } from 'react'

import { button } from './Button.css'

type ButtonProps = {
    children: ReactNode
    type?: 'button' | 'submit'
    onClick?: () => void
    disabled?: boolean
}

export function Button({
    children,
    type = 'button',
    onClick,
    disabled
}: ButtonProps) {
    return (
        <button
            className={button}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
