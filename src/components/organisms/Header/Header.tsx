import { Logo, NavigationLink } from '@/components/atoms'
import { NAVIGATION_LINK_TYPE, NavigationLinkType } from '@/models'

import { header, navigation } from './Header.css'

const links: NavigationLinkType[] = [
    {
        href: '/',
        label: NAVIGATION_LINK_TYPE.HOME
    },
    {
        href: '/ideology',
        label: NAVIGATION_LINK_TYPE.IDEOLOGY
    }
]

type HeaderProps = {
    page: NAVIGATION_LINK_TYPE
}

export function Header({ page }: HeaderProps) {
    return (
        <header className={header}>
            <Logo />
            <nav className={navigation}>
                {links
                    .filter(link => link.label !== page)
                    .map(link => (
                        <NavigationLink key={link.label} href={link.href}>
                            {link.label}
                        </NavigationLink>
                    ))}
            </nav>
        </header>
    )
}
