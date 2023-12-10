import { ReactNode } from 'react'

import { Box } from '../Box/Box'
import { Paragraph } from '../Paragraph/Paragraph'

type BoxedParagraphProps = {
    children: ReactNode
}

export function BoxedParagraph({ children }: BoxedParagraphProps) {
    return (
        <Box>
            <Paragraph>{children}</Paragraph>
        </Box>
    )
}
