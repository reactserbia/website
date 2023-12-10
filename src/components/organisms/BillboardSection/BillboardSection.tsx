import { BoxedHeading, BoxedParagraph, InfoSection } from '@/components'
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
            <InfoSection heading='Meeting #1'>
                We are planning to meet monthly and we are starting in January
                of 2024! 🚀
                <br />
                <br />
                The agenda for the first meeting is to clarify the ideology of
                the organization, meet with the same-minded people, get to know
                each other, maybe have some casual talks and definitely have a
                good time sharing love and positivity.
                <br />
                <br />
                We still do not have all the details figured out but we will
                eventually and we will post them here. Stay tuned.
                <br />
                <br />
                🍀
            </InfoSection>
        </section>
    )
}
