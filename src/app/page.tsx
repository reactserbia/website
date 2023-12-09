import Image from 'next/image'

import { bannerContainer, infoContainer, billboardContainer } from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'
import { BoxedHeading } from '@/components'
import { Heading } from '@/components/atoms'
import { BoxedSubheading } from '@/comp'

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
                <BoxedSubheading>
                    Super-charging React Community
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
