import { ReactNode } from 'react'

import { COLOR_VARIANTS } from '@/constants'

import { base, spanBase, textColor } from './Heading.css'

type HeadingProps = {
    children: ReactNode
    variant?: COLOR_VARIANTS
}

export function Heading({
    children,
    variant = COLOR_VARIANTS.PRIMARY
}: HeadingProps) {
    return (
        <h1 className={`${base} ${textColor.secondary}`}>
            {children}
            <span className={spanBase}>{children}</span>
        </h1>
    )
}
