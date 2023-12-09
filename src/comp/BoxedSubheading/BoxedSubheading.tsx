import { ReactNode } from 'react'
import localFont from 'next/font/local'

const komika = localFont({ src: '../../assets/fonts/KomikaHandBold.ttf' })

import { subheading } from './BoxedSubheading.css'

type BoxedSubheadingProps = {
    children: ReactNode
}

export function BoxedSubheading({ children }: BoxedSubheadingProps) {
    return <h2 className={`${subheading} ${komika.className}`}>{children}</h2>
}
