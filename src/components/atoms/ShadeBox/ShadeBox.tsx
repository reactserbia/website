import { ReactNode } from 'react'

import { COLOR_VARIANTS } from '@/constants'
import { container } from './ShadeBox.css'

type ShadeBoxProps = {
    children: ReactNode
    colorVariant?: COLOR_VARIANTS
}

export function ShadeBox({
    children,
    colorVariant = COLOR_VARIANTS.PRIMARY
}: ShadeBoxProps) {
    return <div className={container[colorVariant]}>{children}</div>
}
