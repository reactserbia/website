import { header, headerContent } from './Header.css'

import { Heading } from '@/components/atoms'

export function Header() {
    return (
        <header className={header}>
            <div>
                <Heading>REACT</Heading>
            </div>
        </header>
    )
}
