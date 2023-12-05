import Image from 'next/image'

import { Heading } from '@/components/atoms'

import { container, content, bannerContainer, infoContainer } from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'
import { BoxedHeading } from '@/components'
import { InfoSection } from '@/components/molecules/InfoSection/InfoSection'

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
                    <BoxedHeading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
                        sizeVariant={SIZE_VARIANTS.LARGE}
                    >
                        WELCOME!
                    </BoxedHeading>
                    <InfoSection heading='What is React?' />
                    <InfoSection
                        heading='What is React?'
                        colorVariant={COLOR_VARIANTS.SECONDARY}
                    />
                    <InfoSection
                        heading='What is React?'
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                    />
                </div>
            </div>
        </main>
    )
}
