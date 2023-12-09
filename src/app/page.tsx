import Image from 'next/image'

import {
    content,
    bannerContainer,
    infoContainer,
    billboardContainer,
    aboutContainer
} from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'
import {
    BoxedHeading,
    BoxedSubheading,
    InfoSection,
    NoteEntry
} from '@/components'
import { Heading } from '@/components/atoms'
import { Billboard } from '@/components/atoms/Billboard/Billboard'

export default function Home() {
    return (
        <>
            <div className={bannerContainer}>
                <Image
                    width={857}
                    height={216}
                    src='/images/big-banner.svg'
                    alt='banner'
                />
                <BoxedSubheading sizeVariant={SIZE_VARIANTS.SMALL}>
                    Super-charging Serbia&apos;s React community
                </BoxedSubheading>
            </div>
            <div className={infoContainer}>
                <BoxedHeading
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                    sizeVariant={SIZE_VARIANTS.LARGE}
                >
                    WELCOME!
                </BoxedHeading>
            </div>
            <div className={billboardContainer}>
                <Heading
                    sizeVariant={SIZE_VARIANTS.LARGE}
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    layers={LAYERS_VARIANTS.THREE}
                >
                    BILLBOARD
                </Heading>
            </div>
        </>
    )
}
