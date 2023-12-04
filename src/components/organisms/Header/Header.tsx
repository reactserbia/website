import { COLOR_VARIANTS } from '@/constants'
import { header, headerContent } from './Header.css'

import { Heading } from '@/components/atoms'

export function Header() {
    return (
        <header className={header}>
            <div className={headerContent}>
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>REACT</Heading>
                <Heading>SERBIA</Heading>
            </div>
        </header>
    )
}
