import { ReactNode } from 'react'

import { SIZE_VARIANTS } from '@/constants'

import { sizeVariants } from './Box.css'

type BoxProps = {
    children: ReactNode | ReactNode[]
    sizeVariant?: SIZE_VARIANTS
}

export function Box({ children, sizeVariant = SIZE_VARIANTS.SMALL }: BoxProps) {
    return <div className={sizeVariants[sizeVariant]}>{children}</div>
}
