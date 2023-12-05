import { ReactNode } from 'react'
import { absoluteSpan, button, span } from './NavigationButton.css'

type NavigationButtonProps = {
    children: ReactNode
}

export function NavigationButton({ children }: NavigationButtonProps) {
    return (
        <button className={button}>
            <span className={span}>{children}</span>
            <span className={absoluteSpan}>{children}</span>
        </button>
    )
}
