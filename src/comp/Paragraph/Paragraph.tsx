import { ReactNode } from 'react'
import localFont from 'next/font/local'

import { paragraph } from './Paragraph.css'

const komika = localFont({ src: '../../assets/fonts/KomikaHand.ttf' })

type ParagraphProps = {
    children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
    return <p className={`${paragraph} ${komika.className}`}>{children}</p>
}
