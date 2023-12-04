import { ReactNode } from 'react'

import { COLOR_VARIANTS, LAYERS_VARIANTS, SIZE_VARIANTS } from '@/constants'

import {
    base,
    spanOneVariants,
    spanTwoVariants,
    textColorVariants,
    sizeVariants
} from './Heading.css'

type HeadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
    sizeVariant?: SIZE_VARIANTS
    layers?: LAYERS_VARIANTS
}

export function Heading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY,
    sizeVariant = SIZE_VARIANTS.SMALL,
    layers = LAYERS_VARIANTS.THREE
}: HeadingProps) {
    return (
        <h1
            className={`${base} ${textColorVariants[colorVariant]} ${sizeVariants[sizeVariant]}`}
        >
            {children}
            <span className={spanOneVariants[sizeVariant]}>{children}</span>
            {layers >= LAYERS_VARIANTS.THREE && (
                <span className={spanTwoVariants[sizeVariant]}>{children}</span>
            )}
        </h1>
    )
}
