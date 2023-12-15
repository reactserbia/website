import Image from 'next/image'

import { BoxedHeading, BoxedParagraph } from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'

import { clouds, container, imagesContainer } from './Footer.css'

export function Footer() {
    return (
        <section className={container}>
            <Image
                width={902}
                height={123}
                src='/images/clouds/contact-clouds.svg'
                alt='clouds'
                className={clouds}
            />
            <BoxedHeading
                colorVariant={COLOR_VARIANTS.TERTIARY}
                shadeVariant={SHADE_VARIANTS.DARK}
            >
                CONTACT
            </BoxedHeading>
            <BoxedParagraph>
                We are most definitely open to all ideas! We love negative
                criticism more than positive and very much appreciate the ones
                who are willing to share it with us; we know it is for the
                better. We need you, to engage in order to grow together, in
                order to create the big things. We know that together, we are
                more than capable of doing it otherwise we would not be here. Do
                not hesitate to reach out, give your contribution and write this
                story with us! Let us make a change together. 🍀
            </BoxedParagraph>
            <div className={imagesContainer}>
                <Image
                    width={438}
                    height={245}
                    src='/images/effects/bang.svg'
                    alt='explosion'
                />
                <Image
                    width={142}
                    height={223}
                    src='/images/heroes/girl-1.svg'
                    alt='hero-girl'
                />
            </div>
        </section>
    )
}
