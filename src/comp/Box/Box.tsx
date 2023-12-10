import { ReactNode } from 'react'

import { container } from './Box.css'

type BoxProps = {
    children: ReactNode | ReactNode[]
}

export function Box({ children }: BoxProps) {
    return <div className={container}>{children}</div>
}
