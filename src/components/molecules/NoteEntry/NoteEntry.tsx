import { Note, Subheading } from '@/components/atoms'

import { container } from './NoteEntry.css'

type NoteEntryProps = {
    heading: string
    content: string
}

export function NoteEntry({ heading, content }: NoteEntryProps) {
    return (
        <div className={container}>
            <Subheading>{heading}</Subheading>
            <Note>{content}</Note>
        </div>
    )
}
