import { ReactNode } from 'react'
import Image from 'next/image'

import { headingStyles } from './InfoSection.css'
import { Box, Paragraph } from '@/components'
import { SIZE_VARIANTS } from '@/constants'

type InfoSectionProps = {
    heading: string
    children: ReactNode
    sizeVariant?: SIZE_VARIANTS
}

export function InfoSection({
    heading,
    children,
    sizeVariant = SIZE_VARIANTS.SMALL
}: InfoSectionProps) {
    return (
        <Box sizeVariant={sizeVariant}>
            <h1 className={headingStyles}>{heading}</h1>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
            <Paragraph>{children}</Paragraph>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
        </Box>
    )
}
