import { ReactNode } from 'react'

import { HEADING_VARIANTS } from '@/constants'

import { heading, span } from './Heading.css'

type HeadingProps = {
    children: ReactNode
    variant?: HEADING_VARIANTS
}

export function Heading({
    children,
    variant = HEADING_VARIANTS.BIG_PRIMARY
}: HeadingProps) {
    return (
        <h1 className={heading[variant]}>
            {children}
            {/* <span className={span[variant]}>{children}</span> */}
        </h1>
    )
}
