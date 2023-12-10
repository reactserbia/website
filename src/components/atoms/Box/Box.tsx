import { ReactNode } from 'react'

import { sizeVariants } from './Box.css'
import { SIZE_VARIANTS } from '@/constants'

type BoxProps = {
    children: ReactNode | ReactNode[]
    sizeVariant?: SIZE_VARIANTS
}

export function Box({ children, sizeVariant = SIZE_VARIANTS.SMALL }: BoxProps) {
    return <div className={sizeVariants[sizeVariant]}>{children}</div>
}
