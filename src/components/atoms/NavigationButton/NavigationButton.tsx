import { ReactNode } from 'react'
import { buttonBase } from './NavigationButton.css'
import { spanBase } from '../Heading/Heading.css'

type NavigationButtonProps = {
    children: ReactNode
}

export function NavigationButton({ children }: NavigationButtonProps) {
    return <button className={buttonBase}>{children}</button>
}
