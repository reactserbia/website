import { Button, Logo } from '@/components/atoms'
import { LINK_TYPE, LinkType } from '@/models'

import { header, navigation } from './Header.css'

const links: LinkType[] = [
    {
        href: '/',
        label: LINK_TYPE.HOME
    },
    {
        href: '/ideology',
        label: LINK_TYPE.IDEOLOGY
    }
]

type HeaderProps = {
    page: LINK_TYPE
}

export function Header({ page }: HeaderProps) {
    return (
        <header className={header}>
            <Logo />
            <nav className={navigation}>
                {links
                    .filter(link => link.label !== page)
                    .map(link => (
                        <Button key={link.label} href={link.href}>
                            {link.label}
                        </Button>
                    ))}
            </nav>
        </header>
    )
}
