import { HEADING_VARIANTS } from '@/constants'
import { header, headerContent } from './Header.css'

import { Heading } from '@/components/atoms'

export function Header() {
    return (
        <header className={header}>
            <div className={headerContent}>
                <div>
                    <Heading variant={HEADING_VARIANTS.MEDIUM_PRIMARY}>
                        REACT
                    </Heading>
                    <Heading variant={HEADING_VARIANTS.MEDIUM_SECONDARY}>
                        SERBIA
                    </Heading>
                </div>
            </div>
        </header>
    )
}
