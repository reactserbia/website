import { BoxedHeading, BoxedParagraph, Page } from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'
import { NAVIGATION_LINK_TYPE } from '@/models'

import { sectionContainer } from './page.css'

export default function Ideology() {
    return (
        <Page page={NAVIGATION_LINK_TYPE.IDEOLOGY}>
            <section className={sectionContainer}>
                <BoxedHeading
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                >
                    IDEOLOGY
                </BoxedHeading>
                <BoxedParagraph>
                    On this page, you will find the ideology behind the
                    organization. This is the place where you should be able to
                    dive into our minds, see how we think, why are we doing
                    things certain way, what are our goals, how we operate, etc.
                    Based on all that, you should be able to draw the conclution
                    about the organization, see if you like the idea and whether
                    you want to be a part of it or not. We hope you do! 🍀
                </BoxedParagraph>
            </section>
        </Page>
    )
}
