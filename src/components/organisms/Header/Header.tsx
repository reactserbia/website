import { COLOR_VARIANTS } from '@/constants'
import { header, headerContent, logoContainer } from './Header.css'

import { Heading, Logo } from '@/components/atoms'

export function Header() {
    return (
        <header className={header}>
            <div className={headerContent}>
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>REACT</Heading>
                <Heading>SERBIA</Heading>
                <div className={logoContainer}>
                    <Logo />
                </div>
            </div>
        </header>
    )
}
