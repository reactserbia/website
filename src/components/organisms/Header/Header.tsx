import { COLOR_VARIANTS } from '@/constants'
import { header, headerContent, logo, logoContainer } from './Header.css'

import { Heading, NavigationButton } from '@/components/atoms'
import Image from 'next/image'

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
                <div>
                    <NavigationButton>Home</NavigationButton>
                </div>
            </div>
        </header>
    )
}
