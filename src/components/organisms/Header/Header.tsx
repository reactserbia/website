import Image from 'next/image'

import { COLOR_VARIANTS } from '@/constants'
import { Heading, NavigationButton } from '@/components/atoms'
import {
    header,
    headerContent,
    logo,
    logoContainer,
    navigation
} from './Header.css'

export function Header() {
    return (
        <header className={header}>
            <div className={headerContent}>
                <div>
                    <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>
                        REACT
                    </Heading>
                    <Heading>SERBIA</Heading>
                </div>
                <div className={logoContainer}>
                    <Image
                        width={135}
                        height={85}
                        src='/images/logo-cloud.svg'
                        alt='logo-cloud'
                    />
                    <Image
                        width={42}
                        height={42}
                        src='/images/logo-rs.svg'
                        alt='logo-cloud'
                        className={logo}
                    />
                </div>
                <nav className={navigation}>
                    <NavigationButton>Home</NavigationButton>
                    <NavigationButton>About</NavigationButton>
                </nav>
            </div>
        </header>
    )
}
