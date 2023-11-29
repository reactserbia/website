import { ReactNode } from 'react'

import { Rubik } from 'next/font/google'

import { paragraph, span } from './Logo.css'

const rubik = Rubik({ subsets: ['latin'] })

type TextProps = {
    children: ReactNode
    variant?: 'primary' | 'secondary'
}

const Text = ({ children, variant = 'primary' }: TextProps) => (
    <p className={`${rubik.className} ${paragraph[variant]}`}>
        {children}
        <span className={span}>{children}</span>
    </p>
)

export function Logo() {
    return (
        <div>
            <Text>REACT</Text>
            <Text variant='secondary'>SERBIA</Text>
        </div>
    )
}
