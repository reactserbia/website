import { ReactNode } from 'react'
import localFont from 'next/font/local'

const komika = localFont({ src: '../../assets/fonts/KomikaHandBold.ttf' })

import { button } from './Button.css'

type ButtonProps = {
    children: ReactNode
}

export function Button({ children }: ButtonProps) {
    return (
        <button className={`${button} ${komika.className}`}>{children}</button>
    )
}
