import { ReactNode } from 'react'

import { Rubik } from 'next/font/google'

import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'

import { span, textColorVariants } from './Heading.css'

const rubik = Rubik({ subsets: ['latin'] })

export type HeadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
    shadeVariant?: SHADE_VARIANTS
}

export function Heading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY,
    shadeVariant = SHADE_VARIANTS.LIGHT
}: HeadingProps) {
    return (
        <h1
            className={`${rubik.className} ${
                textColorVariants[`${colorVariant}-${shadeVariant}`]
            }`}
        >
            {children}
            <span className={span}>{children}</span>
        </h1>
    )
}
