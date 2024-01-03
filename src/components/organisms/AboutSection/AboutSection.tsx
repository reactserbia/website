import Image from 'next/image'

import {
    BackgroundCloudsSecondary,
    BoxedHeading,
    Clouds,
    InfoSection
} from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'

import {
    container,
    content,
    heroImage,
    infoLeftSide,
    infoRightSide
} from './AboutSection.css'

export function AboutSection() {
    return (
        <section className={container}>
            <div className={content}>
                <div className={infoLeftSide}>
                    <BackgroundCloudsSecondary />
                    <Clouds />
                    <BoxedHeading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
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
        </section>
    )
}
