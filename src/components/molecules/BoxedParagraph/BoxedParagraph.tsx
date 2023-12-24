import { ReactNode } from 'react'

import { Box, Paragraph } from '@/components/atoms'
import { SIZE_VARIANTS } from '@/constants'

type BoxedParagraphProps = {
    children: ReactNode
    sizeVariant?: SIZE_VARIANTS
}

export function BoxedParagraph({
    children,
    sizeVariant = SIZE_VARIANTS.LARGE
}: BoxedParagraphProps) {
    return (
        <Box sizeVariant={sizeVariant}>
            <Paragraph sizeVariant={SIZE_VARIANTS.SMALL}>{children}</Paragraph>
        </Box>
    )
}
