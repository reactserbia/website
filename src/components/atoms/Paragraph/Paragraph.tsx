import { ReactNode } from 'react'

import { paragraphSizes } from './Paragraph.css'
import { SIZE_VARIANTS } from '@/constants'

type ParagraphProps = {
    children: ReactNode
    sizeVariant?: SIZE_VARIANTS
}

export function Paragraph({
    children,
    sizeVariant = SIZE_VARIANTS.MEDIUM
}: ParagraphProps) {
    return <p className={paragraphSizes[sizeVariant]}>{children}</p>
}
