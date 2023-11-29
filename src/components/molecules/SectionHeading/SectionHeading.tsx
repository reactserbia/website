import { ReactNode } from 'react'

import { Heading } from '@/components/atoms'

import { container } from './SectionHeading.css'

type SectionHeadingProps = {
    children: ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <div className={container}>
            <Heading>{children}</Heading>
        </div>
    )
}
