import { ReactNode } from 'react'

import { paragraph } from './Paragraph.css'

type ParagraphProps = {
    children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
    return <p className={paragraph}>{children}</p>
}
