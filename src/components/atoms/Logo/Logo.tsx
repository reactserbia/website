import Image from 'next/image'

import { container, logoContainer, logoShade, logoImage } from './Logo.css'

export function Logo() {
    return (
        <div className={container}>
            <div className={logoContainer}>
                <Image
                    width={46}
                    height={46}
                    src='/images/logo.svg'
                    alt='Logo'
                    className={logoImage}
                />
            </div>
            <div className={logoShade}></div>
        </div>
    )
}
