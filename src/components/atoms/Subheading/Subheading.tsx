import { ReactNode } from 'react'
import { subheadningVariants } from './Subheading.css'
import { COLOR_VARIANTS } from '@/constants'

type SubheadingProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
}

export function Subheading({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY
}: SubheadingProps) {
    return <h2 className={subheadningVariants[colorVariant]}>{children}</h2>
}
