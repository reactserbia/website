import { ReactNode } from 'react'
import { Rubik } from 'next/font/google'

import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'

import {
    base,
    spanOneSizeVariants,
    spanTwoSizeVariants,
    textColorVariants,
    sizeVariants,
    strokeColorVariants,
    spanOneColorVariants,
    spanTwoColorVariants
} from './Heading.css'

const rubik = Rubik({ subsets: ['latin'] })

export type HeadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
    sizeVariant?: SIZE_VARIANTS
    layers?: LAYERS_VARIANTS
    shadeVariant?: SHADE_VARIANTS
}

export function Heading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY,
    sizeVariant = SIZE_VARIANTS.SMALL,
    layers = LAYERS_VARIANTS.TWO,
    shadeVariant = SHADE_VARIANTS.LIGHT
}: HeadingProps) {
    return (
        <h1
            className={`${rubik.className} ${base} ${
                textColorVariants[`${colorVariant}-${shadeVariant}`]
            } ${sizeVariants[sizeVariant]} ${
                strokeColorVariants[`${colorVariant}-${layers}`]
            }`}
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
