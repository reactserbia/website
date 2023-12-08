import Image from 'next/image'

import {
    container,
    content,
    bannerContainer,
    midSectionLogoContainer,
    infoContainer,
    infoSectionsContainer,
    cloud,
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
import { Heading, Logo } from '@/components/atoms'
import { Billboard } from '@/components/atoms/Billboard/Billboard'

export default function Home() {
    return (
        <main className={container}>
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
                    <Heading
                        sizeVariant={SIZE_VARIANTS.LARGE}
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        layers={LAYERS_VARIANTS.THREE}
                    >
                        BILLBOARD
                    </Heading>
                    <Billboard>
                        <NoteEntry
                            heading='What is React?'
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                        <NoteEntry
                            heading='What is React?'
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                    </Billboard>
                </div>
            </div>
            <div className={aboutContainer}>
                <div className={content}>
                    <InfoSection
                        heading='What is React?'
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    />
                </div>
            </div>
        </main>
    )
}
