import { Button, Logo } from '@/components/atoms'
import { header, navigation } from './Header.css'

export function Header() {
    return (
        <header className={header}>
            <Logo />
            <nav className={navigation}>
                <Button>Home</Button>
                <Button>Ideology</Button>
            </nav>
        </header>
    )
}
