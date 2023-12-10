import { ReactNode } from 'react'

import { Box } from '../Box/Box'
import { Paragraph } from '../Paragraph/Paragraph'
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
