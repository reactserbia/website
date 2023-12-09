import Image from 'next/image'
import localFont from 'next/font/local'

import { container } from './InfoSection.css'

const komika = localFont({ src: '../../assets/fonts/KomikaHand.ttf' })
const komikaBold = localFont({ src: '../../assets/fonts/KomikaHandBold.ttf' })

type InfoSectionProps = {
    heading: string
    content: string
}

export function InfoSection({ heading, content }: InfoSectionProps) {
    return (
        <div className={container}>
            <h1 className={`${komikaBold.className}`}>{heading}</h1>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
            <p className={`${komika.className}`}>{content}</p>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
        </div>
    )
}
