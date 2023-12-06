import { ReactNode } from 'react'

import { subheadningVariants, sizeVariants } from './Subheading.css'
import { COLOR_VARIANTS, SIZE_VARIANTS } from '@/constants'

type SubheadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
    sizeVariant?: SIZE_VARIANTS
}

export function Subheading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY,
    sizeVariant = SIZE_VARIANTS.MEDIUM
}: SubheadingProps) {
    return (
        <h2
            className={`${subheadningVariants[colorVariant]} ${sizeVariants[sizeVariant]}`}
        >
            {children}
        </h2>
    )
}
