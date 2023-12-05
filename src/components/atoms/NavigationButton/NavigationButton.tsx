import { ReactNode } from 'react'
import { buttonBase, buttonSpan } from './NavigationButton.css'

type NavigationButtonProps = {
    children: ReactNode
}

export function NavigationButton({ children }: NavigationButtonProps) {
    return (
        <button className={buttonBase}>
            <span className={buttonSpan}>{children}</span>
        </button>
    )
}
