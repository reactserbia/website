import { ReactNode } from 'react'

import { Subheading } from '@/components/atoms'
import { container } from './BoxedSubheading.css'
import { SIZE_VARIANTS } from '@/constants'

type BoxedSubheadingProps = {
    children: ReactNode
    sizeVariant?: SIZE_VARIANTS
}

export function BoxedSubheading({
    children,
    sizeVariant = SIZE_VARIANTS.SMALL
}: BoxedSubheadingProps) {
    return (
        <div className={container}>
            <Subheading sizeVariant={sizeVariant}>{children}</Subheading>
        </div>
    )
}
