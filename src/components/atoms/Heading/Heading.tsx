import { ReactNode } from 'react'

import { COLOR_VARIANTS, LAYERS_VARIANTS, SIZE_VARIANTS } from '@/constants'

import {
    base,
    spanOneSizeVariants,
    spanTwoSizeVariants,
    textColorVariants,
    sizeVariants,
    spanOneColorVariants,
    spanTwoColorVariants
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
            <span
                className={`${spanOneSizeVariants[sizeVariant]} ${
                    (layers === LAYERS_VARIANTS.TWO
                        ? spanTwoColorVariants
                        : spanOneColorVariants)[colorVariant]
                }`}
            >
                {children}
            </span>
            {layers >= LAYERS_VARIANTS.THREE && (
                <span
                    className={`${spanTwoSizeVariants[sizeVariant]} ${spanTwoColorVariants[colorVariant]}`}
                >
                    {children}
                </span>
            )}
        </h1>
    )
}
