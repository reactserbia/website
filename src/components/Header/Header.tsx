import { header, headerContent } from './Header.css'

import { ReactLogo } from '../ReactLogo/ReactLogo'

export function Header() {
    return (
        <header className={header}>
            <div className={headerContent}>Header</div>
        </header>
    )
}
