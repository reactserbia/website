import Image from 'next/image'

import {
    bannerContainer,
    infoContainer,
    cloudsBackground,
    billboardContainer,
    infoLeftSide,
    infoRightSide,
    heroImage,
    distantCloudsBackground
} from './page.css'
import { COLOR_VARIANTS, SHADE_VARIANTS, SIZE_VARIANTS } from '@/constants'
import {
    BoxedHeading,
    BoxedParagraph,
    BoxedSubheading,
    InfoSection
} from '@/components'

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
                <Image
                    width={1024}
                    height={420}
                    src='/images/clouds-bg.svg'
                    alt='clouds'
                    className={distantCloudsBackground}
                />
                <Image
                    width={655}
                    height={174}
                    src='/images/clouds.svg'
                    alt='clouds'
                    className={cloudsBackground}
                />
                <div className={infoLeftSide}>
                    <BoxedHeading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
                        sizeVariant={SIZE_VARIANTS.LARGE}
                    >
                        WELCOME!
                    </BoxedHeading>
                    <Image
                        width={502}
                        height={436}
                        src='/images/hero.svg'
                        alt='hero'
                        className={heroImage}
                    />
                </div>
                <div className={infoRightSide}>
                    <InfoSection heading='About Us'>
                        React Serbia serves as a unifying platform for
                        passionate React enthusiasts, striving to empower and
                        elevate their expertise. Our mission is to establish
                        React Serbia as the definitive one-stop destination for
                        the React community in Serbia.
                        <br />
                        <br />
                        Our objective is to establish a robust framework for:
                        <br />• community growth
                        <br />• networking opportunities
                        <br />• exchange of knowledge
                        <br />• exchange of ideas
                        <br />• showcasing talent
                        <br />• job search
                        <br />• providing the services for the community.
                        <br />
                        <br />
                        Through this structured approach, we endeavour to create
                        an environment that not only nurtures individual
                        professional development but also contributes
                        significantly to the collective advancement of our
                        community.
                    </InfoSection>
                </div>
            </div>
            <div className={billboardContainer}>
                <BoxedHeading
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                    sizeVariant={SIZE_VARIANTS.LARGE}
                >
                    BILLBOARD
                </BoxedHeading>
                <BoxedParagraph>
                    The billboard section is the place where we will report. We
                    plan to share information about the ongoing events and
                    interesting things relevant to the work of the organisation
                    and our community.
                </BoxedParagraph>
            </div>
        </>
    )
}
