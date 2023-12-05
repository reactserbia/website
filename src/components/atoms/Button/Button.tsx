import { COLOR_VARIANTS } from '@/constants'
import { ReactNode } from 'react'

import { buttonVariants } from './Button.css'

type ButtonProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
}

export function Button({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY
}: ButtonProps) {
    return <button className={buttonVariants[colorVariant]}>{children}</button>
}
