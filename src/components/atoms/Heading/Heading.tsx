import { ReactNode } from 'react'

import { HEADING_VARIANTS } from '@/constants'

import { heading, span } from './Heading.css'

type TextProps = {
    children: ReactNode
    variant?: HEADING_VARIANTS
}

export function Text({
    children,
    variant = HEADING_VARIANTS.PRIMARY
}: TextProps) {
    return (
        <h1 className={heading[variant]}>
            {children}
            <span className={span}>{children}</span>
        </h1>
    )
}
