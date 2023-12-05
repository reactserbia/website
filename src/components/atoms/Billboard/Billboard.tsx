import { ReactNode } from 'react'

import { container, content } from './Billboard.css'

type BillboardProps = {
    children: ReactNode
}

export function Billboard({ children }: BillboardProps) {
    return (
        <div className={container}>
            <div className={content}>{children}</div>
        </div>
    )
}
