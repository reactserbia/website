import Image from 'next/image'

import { container, logoContainer, logoShade, logoImage } from './Logo.css'

export function Logo() {
    return (
        <div className={container}>
            <div className={logoContainer}>
                <Image
                    width={54}
                    height={54}
                    src='/images/logo.svg'
                    alt='Logo'
                    className={logoImage}
                />
            </div>
            <div className={logoShade}></div>
        </div>
    )
}
