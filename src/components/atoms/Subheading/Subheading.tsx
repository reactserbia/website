import { ReactNode } from 'react'

import { subheading } from './Subheading.css'

type SubheadingProps = {
    children: ReactNode
}

export function Subheading({ children }: SubheadingProps) {
    return <p className={subheading}>{children}</p>
}
