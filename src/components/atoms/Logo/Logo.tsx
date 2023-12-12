import Image from 'next/image'

import { container, logoImage } from './Logo.css'

export function Logo() {
    return (
        <div className={container}>
            <Image
                width={46}
                height={46}
                src='/images/logo.svg'
                alt='logo'
                className={logoImage}
            />
        </div>
    )
}
