import { ReactNode } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

import { container, headingStyles, paragraph } from './InfoSection.css'

const komika = localFont({ src: '../../../assets/fonts/KomikaHand.ttf' })
const komikaBold = localFont({
    src: '../../../assets/fonts/KomikaHandBold.ttf'
})

type InfoSectionProps = {
    heading: string
    children: ReactNode
}

export function InfoSection({ heading, children }: InfoSectionProps) {
    return (
        <div className={container}>
            <h1 className={`${komikaBold.className} ${headingStyles}`}>
                {heading}
            </h1>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
            <p className={`${komika.className} ${paragraph}`}>{children}</p>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
        </div>
    )
}
