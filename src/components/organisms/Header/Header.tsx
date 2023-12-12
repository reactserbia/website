import { COLOR_VARIANTS } from '@/constants'
import { Button, Heading, Logo } from '@/components/atoms'
import { header, navigation } from './Header.css'

export function Header() {
    return (
        <header className={header}>
            <Logo />
            {/* <div>
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>REACT</Heading>
                <Heading>SERBIA</Heading>
            </div> */}
            <nav className={navigation}>
                <Button>Home</Button>
                <Button>Ideology</Button>
            </nav>
        </header>
    )
}
