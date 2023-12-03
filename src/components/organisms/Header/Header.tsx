import { HEADING_VARIANTS } from '@/constants'
import { header, headerContent } from './Header.css'

import { Heading } from '@/components/atoms'

export function Header() {
    return (
        <header className={header}>
            <div>
                <Heading variant={HEADING_VARIANTS.MEDIUM_PRIMARY}>
                    REACT
                </Heading>
            </div>
        </header>
    )
}
