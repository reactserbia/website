import { COLOR_VARIANTS } from '@/constants'
import { header, headerContent, logoContainer } from './Header.css'

import { Heading } from '@/components/atoms'
import Image from 'next/image'

export function Header() {
    return (
        <header className={header}>
            <div className={headerContent}>
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>REACT</Heading>
                <Heading>SERBIA</Heading>
                <div className={logoContainer}>
                    <Image
                        width={135}
                        height={85}
                        src='/images/logo-cloud.svg'
                        alt='logo-cloud'
                    />
                </div>
            </div>
        </header>
    )
}
