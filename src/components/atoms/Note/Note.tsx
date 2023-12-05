import { ReactNode } from 'react'

import { container } from './Note.css'
import { Paragraph } from '..'

type NoteProps = {
    children: ReactNode
}

export function Note({ children }: NoteProps) {
    return (
        <div className={container}>
            <Paragraph>{children}</Paragraph>
        </div>
    )
}
