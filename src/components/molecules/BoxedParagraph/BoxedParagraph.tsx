import { ReactNode } from 'react'

import { Box, Paragraph } from '@/components/atoms'
import { SIZE_VARIANTS } from '@/constants'

type BoxedParagraphProps = {
    children: ReactNode
}

export function BoxedParagraph({ children }: BoxedParagraphProps) {
    return (
        <Box sizeVariant={SIZE_VARIANTS.LARGE}>
            <Paragraph>{children}</Paragraph>
        </Box>
    )
}
