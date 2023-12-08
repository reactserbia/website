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
        </>
    )
}
