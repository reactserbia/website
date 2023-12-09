import Image from 'next/image'

import {
    bannerContainer,
    infoContainer,
    billboardContainer,
    infoLeftSide,
    infoRightSide
} from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'
import { BoxedHeading } from '@/components'
import { Heading } from '@/components/atoms'
import { BoxedSubheading, InfoSection } from '@/comp'

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
                <div className={infoLeftSide}>
                    <BoxedHeading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
                        sizeVariant={SIZE_VARIANTS.LARGE}
                    >
                        WELCOME!
                    </BoxedHeading>
                </div>
                <div className={infoRightSide}>
                    <InfoSection
                        heading='About Us'
                        content='React Serbia serves as a unifying platform for passionate React enthusiasts, striving to empower and elevate their expertise. Our mission is to establish React Serbia as the definitive one-stop destination for the React community in Serbia.
 
Our objective is to establish a robust framework for:
community growth
networking opportunities
exchange of knowledge
exchange of ideas
showcasing talent
job search
providing the services for the community.

Through this structured approach, we endeavour to create an environment that not only nurtures individual professional development but also contributes significantly to the collective advancement of our community.'
                    />
                </div>
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
