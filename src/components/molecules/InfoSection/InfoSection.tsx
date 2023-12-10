import { ReactNode } from 'react'
import Image from 'next/image'

import { container, headingStyles } from './InfoSection.css'
import { Paragraph } from '@/components'

type InfoSectionProps = {
    heading: string
    children: ReactNode
}

export function InfoSection({ heading, children }: InfoSectionProps) {
    return (
        <div className={container}>
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
        </div>
    )
}
