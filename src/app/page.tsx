import Image from 'next/image'

import { Heading } from '@/components/atoms'

import { container, content, bannerContainer, infoContainer } from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'

export default function Home() {
    return (
        <main className={container}>
            <div className={bannerContainer}>
                <div className={content}>
                    <Image
                        width={450}
                        height={211}
                        src='/images/banner.svg'
                        alt='banner'
                    />
                </div>
            </div>
            <div className={infoContainer}>
                <div className={content}>
                    <Heading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
                        layers={LAYERS_VARIANTS.THREE}
                        sizeVariant={SIZE_VARIANTS.LARGE}
                    >
                        WELCOME!
                    </Heading>
                </div>
            </div>
        </main>
    )
}
