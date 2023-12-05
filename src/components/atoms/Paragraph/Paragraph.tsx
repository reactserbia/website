import { ReactNode } from 'react'

type ParagraphProps = {
    children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
    return <p>{children}</p>
}
