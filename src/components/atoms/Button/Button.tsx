import { ReactNode } from 'react'
import Link from 'next/link'

import { button } from './Button.css'

type ButtonProps = {
    children: ReactNode
    href: string
}

export function Button({ children, href }: ButtonProps) {
    return (
        <Link href={href} className={button}>
            {children}
        </Link>
    )
}
