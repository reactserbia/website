import { ReactNode } from 'react'
import Image from 'next/image'

import { container, headingStyles, paragraph } from './InfoSection.css'

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
            <p className={paragraph}>{children}</p>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
        </div>
    )
}
