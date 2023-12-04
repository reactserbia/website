import { ReactNode } from 'react'

import { COLOR_VARIANTS, SIZE_VARIANTS } from '@/constants'

import { base, spanBase, textColorVariants, sizeVariants } from './Heading.css'

type HeadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
    sizeVariant?: SIZE_VARIANTS
}

export function Heading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY,
    sizeVariant = SIZE_VARIANTS.SMALL
}: HeadingProps) {
    return (
        <h1
            className={`${base} ${textColorVariants[colorVariant]} ${sizeVariants[sizeVariant]}`}
        >
            {children}
            <span className={spanBase}>{children}</span>
        </h1>
    )
}
