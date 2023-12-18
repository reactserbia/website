import { ReactNode } from 'react'

import { Box, Paragraph, Stars } from '@/components'
import { SIZE_VARIANTS } from '@/constants'

import { headingStyles } from './InfoSection.css'

type InfoSectionProps = {
    heading: string
    children: ReactNode
    sizeVariant?: SIZE_VARIANTS
}

export function InfoSection({
    heading,
    children,
    sizeVariant = SIZE_VARIANTS.MEDIUM
}: InfoSectionProps) {
    return (
        <Box sizeVariant={sizeVariant}>
            <h1 className={headingStyles}>{heading}</h1>
            <Stars />
            <Paragraph>{children}</Paragraph>
            <Stars />
        </Box>
    )
}
