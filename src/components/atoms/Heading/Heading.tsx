import { ReactNode } from 'react'

import { HEADING_VARIANTS } from '@/constants'

import { base, spanBase, textColor } from './Heading.css'

type HeadingProps = {
    children: ReactNode
    variant?: HEADING_VARIANTS
}

export function Heading({
    children,
    variant = HEADING_VARIANTS.BIG_PRIMARY
}: HeadingProps) {
    return (
        <h1 className={`${base} ${textColor.secondary}`}>
            {children}
            <span className={spanBase}>{children}</span>
        </h1>
    )
}
