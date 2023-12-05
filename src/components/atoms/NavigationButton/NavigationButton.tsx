import { ReactNode } from 'react'
import { absoluteSpan, buttonBase, spanBase } from './NavigationButton.css'

type NavigationButtonProps = {
    children: ReactNode
}

export function NavigationButton({ children }: NavigationButtonProps) {
    return (
        <button className={buttonBase}>
            <span className={spanBase}>{children}</span>
            <span className={absoluteSpan}>{children}</span>
            <span className={absoluteSpan}>{children}</span>
        </button>
    )
}
