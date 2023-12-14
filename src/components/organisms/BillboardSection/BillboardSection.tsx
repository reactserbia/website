import { BoxedHeading, BoxedParagraph, InfoSection } from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'

import { billboardContainer, billboardContent } from './BillboardSection.css'

export function BillboardSection() {
    return (
        <section className={billboardContainer}>
            <BoxedHeading
                colorVariant={COLOR_VARIANTS.TERTIARY}
                shadeVariant={SHADE_VARIANTS.DARK}
            >
                BILLBOARD
            </BoxedHeading>
            <BoxedParagraph>
                The billboard section is the place where we will report. We plan
                to share information about the ongoing events and interesting
                things relevant to the work of the organisation and our
                community.
            </BoxedParagraph>
            <div className={billboardContent}>
                <InfoSection heading='Meeting #1'>
                    We are planning to meet monthly and we are starting in
                    January of 2024! 🚀
                    <br />
                    <br />
                    The agenda for the first meeting is to clarify the ideology
                    of the organization, meet with the same-minded people, get
                    to know each other, maybe have some casual talks and
                    definitely have a good time sharing love and positivity.
                    <br />
                    <br />
                    We still do not have all the details figured out but we will
                    eventually and we will post them here. Stay tuned.
                    <br />
                    <br />
                    🍀
                </InfoSection>
                <InfoSection heading='Lorem Ipsum'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                    <br />
                    <br />
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    <br />
                    <br />
                    🍀
                </InfoSection>
            </div>
        </section>
    )
}
