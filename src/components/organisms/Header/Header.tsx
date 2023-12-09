import { COLOR_VARIANTS } from '@/constants'
import { Heading } from '@/components/atoms'
import { Button } from '@/comp'
import { header, navigation } from './Header.css'

export function Header() {
    return (
        <header className={header}>
            <div>
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>REACT</Heading>
                <Heading>SERBIA</Heading>
            </div>
            <nav className={navigation}>
                <Button>Home</Button>
                <Button>Ideology</Button>
            </nav>
        </header>
    )
}
