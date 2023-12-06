import { ReactNode } from 'react'

import { Subheading } from '@/components/atoms'
import { container } from './BoxedSubheading.css'

type BoxedSubheadingProps = {
    children: ReactNode
}

export function BoxedSubheading({ children }: BoxedSubheadingProps) {
    return (
        <div className={container}>
            <Subheading>{children}</Subheading>
        </div>
    )
}
