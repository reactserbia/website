import { BoxedHeading, BoxedParagraph, InfoSection } from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'
import { headingContainer } from '@/style'

import { billboardContent, container, content } from './BillboardSection.css'

export function BillboardSection() {
    return (
        <section className={container}>
            <div className={content}>
                <div className={headingContainer}>
                    <BoxedHeading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
                    >
                        BILLBOARD
                    </BoxedHeading>
                    <BoxedParagraph>
                        The billboard section is the place where we will report.
                        We plan to share information about the ongoing events
                        and interesting things relevant to the work of the
                        organisation and our community.
                    </BoxedParagraph>
                </div>
                <div className={billboardContent}>
                    <InfoSection heading='Meeting #1'>
                        We are planning to meet monthly and we are starting in
                        January of 2024! 🚀
                        <br />
                        <br />
                        The agenda for the first meeting is to clarify the
                        ideology of the organization, meet with the same-minded
                        people, get to know each other, maybe have some casual
                        talks and definitely have a good time sharing love and
                        positivity.
                        <br />
                        <br />
                        We still do not have all the details figured out but we
                        will eventually and we will post them here. Stay tuned.
                        <br />
                        <br />
                        <span>🍀</span>
                    </InfoSection>
                </div>
            </div>
        </section>
    )
}
