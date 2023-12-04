import { ReactNode } from 'react'

import { COLOR_VARIANTS } from '@/constants'

import { base, spanBase, textColor } from './Heading.css'

type HeadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
}

export function Heading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY
}: HeadingProps) {
    return (
        <h1 className={`${base} ${textColor[colorVariant]}`}>
            {children}
            <span className={spanBase}>{children}</span>
        </h1>
    )
}
