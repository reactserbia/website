import { BoxedHeading, BoxedParagraph } from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS, SIZE_VARIANTS } from '@/constants'
import { billboardContainer } from './BillboardSection.css'

export function BillboardSection() {
    return (
        <section className={billboardContainer}>
            <BoxedHeading
                colorVariant={COLOR_VARIANTS.TERTIARY}
                shadeVariant={SHADE_VARIANTS.DARK}
                sizeVariant={SIZE_VARIANTS.LARGE}
            >
                BILLBOARD
            </BoxedHeading>
            <BoxedParagraph>
                The billboard section is the place where we will report. We plan
                to share information about the ongoing events and interesting
                things relevant to the work of the organisation and our
                community.
            </BoxedParagraph>
        </section>
    )
}
