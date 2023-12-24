import { ReactNode } from 'react'

import Link from 'next/link'

import { navigationLink } from './NavigationLink.css'

type ButtonProps = {
    children: ReactNode
    href: string
}

export function NavigationLink({ children, href }: ButtonProps) {
    return (
        <Link href={href} className={navigationLink}>
            {children}
        </Link>
    )
}
