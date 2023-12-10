import { ReactNode } from 'react'

import { subheading } from './BoxedSubheading.css'

type BoxedSubheadingProps = {
    children: ReactNode
}

export function BoxedSubheading({ children }: BoxedSubheadingProps) {
    return <h2 className={subheading}>{children}</h2>
}
