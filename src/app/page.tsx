import Image from 'next/image'

import {
    container,
    content,
    bannerContainer,
    midSectionLogoContainer,
    infoContainer,
    infoSectionsContainer,
    cloud,
    billboardContainer
} from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'
import { BoxedHeading } from '@/components'
import { InfoSection } from '@/components/molecules/InfoSection/InfoSection'
import { Heading, Logo } from '@/components/atoms'
import { Billboard } from '@/components/atoms/Billboard/Billboard'

export default function Home() {
    return (
        <main className={container}>
            <div className={bannerContainer}>
                <div className={content}>
                    <Image
                        width={857}
                        height={216}
                        src='/images/big-banner.svg'
                        alt='banner'
                    />
                </div>
                <div className={midSectionLogoContainer}>
                    <Logo />
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
                    <div className={infoSectionsContainer}>
                        <InfoSection
                            heading='What is React?'
                            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                        />
                        <InfoSection
                            heading='What is React?'
                            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                        />
                    </div>
                </div>
                <div className={midSectionLogoContainer}>
                    <Image
                        width={148}
                        height={64}
                        src='/images/react.svg'
                        alt='react'
                    />
                </div>
                <Image
                    width={359}
                    height={140}
                    src='/images/cloud.svg'
                    alt='cloud'
                    className={cloud}
                />
            </div>
            <div className={billboardContainer}>
                <div className={content}>
                    {' '}
                    <Heading
                        sizeVariant={SIZE_VARIANTS.LARGE}
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        layers={LAYERS_VARIANTS.THREE}
                    >
                        BILLBOARD
                    </Heading>
                    <Billboard>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of
                            &quot;de Finibus Bonorum et Malorum&quot; (The
                            Extremes of Good and Evil) by Cicero, written in 45
                            BC. This book is a treatise on the theory of ethics,
                            very popular during the Renaissance. The first line
                            of Lorem Ipsum, &quot;Lorem ipsum dolor sit
                            amet..&quot;, comes from a line in section 1.10.32.
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from &quot;de Finibus
                            Bonorum et Malorum&quot; by Cicero are also
                            reproduced in their exact original form, accompanied
                            by English versions from the 1914 translation by H.
                            Rackham.
                        </p>
                    </Billboard>
                </div>
            </div>
        </main>
    )
}
