import { Button, Logo } from '@/components/atoms'
import { header, navigation } from './Header.css'

export function Header() {
    return (
        <header className={header}>
            <Logo />
            <nav className={navigation}>
                <Button href='/'>Home</Button>
                <Button href='/ideology'>Ideology</Button>
            </nav>
        </header>
    )
}
