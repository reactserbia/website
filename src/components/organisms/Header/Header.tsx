import { COLOR_VARIANTS } from '@/constants'
import { Heading, NavigationButton } from '@/components/atoms'
import { header } from './Header.css'

export function Header() {
    return (
        <header className={header}>
            <div>
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>REACT</Heading>
                <Heading>SERBIA</Heading>
            </div>
        </header>
    )
}
