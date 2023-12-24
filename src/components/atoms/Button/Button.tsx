import { ReactNode } from 'react'

import { button } from './Button.css'

type ButtonProps = {
    children: ReactNode
    type?: 'button' | 'submit'
    onClick?: () => void
    disabled?: boolean
    marginTop?: string
}

export function Button({
    children,
    type = 'button',
    onClick,
    disabled,
    marginTop = '0'
}: ButtonProps) {
    return (
        <button
            className={button}
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ marginTop }}
        >
            {children}
        </button>
    )
}
