import Image from 'next/image'

import { SIZE_VARIANTS } from '@/constants'

import { container, logoImage } from './Logo.css'

type LogoProps = {
    sizeVariant?: SIZE_VARIANTS
}

export function Logo({ sizeVariant = SIZE_VARIANTS.LARGE }: LogoProps) {
    return (
        <div className={container[sizeVariant]}>
            <Image
                width={46}
                height={46}
                src='/images/logo.svg'
                alt='logo'
                className={logoImage[sizeVariant]}
            />
        </div>
    )
}
