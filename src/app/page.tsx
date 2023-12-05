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
                    <InfoSection
                        heading='What is React?'
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                    />
                    <InfoSection
                        heading='What is React?'
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                        colorVariant={COLOR_VARIANTS.SECONDARY}
                    />
                    <InfoSection
                        heading='What is React?'
                        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                    />
                </div>
            </div>
        </main>
    )
}
