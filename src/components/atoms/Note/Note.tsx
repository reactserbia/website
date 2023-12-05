import { ReactNode } from 'react'

import { container } from './Note.css'

type NoteProps = {
    children: ReactNode
}

export function Note({ children }: NoteProps) {
    return <div className={container}>{children}</div>
}
