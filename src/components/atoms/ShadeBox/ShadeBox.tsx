import { ReactNode } from 'react'

import { container } from './ShadeBox.css'

type ShadeBoxProps = {
    children: ReactNode
}

export function ShadeBox({ children }: ShadeBoxProps) {
    return <div className={container}>{children}</div>
}
