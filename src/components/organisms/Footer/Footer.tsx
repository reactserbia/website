import Image from 'next/image'

import {
    BoxedHeading,
    BoxedParagraph,
    SocialLink,
    Subheading
} from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'
import { SOCIAL_NETWORK_ICONS, SocialLinkType } from '@/models'

import {
    author,
    bangImage,
    clouds,
    container,
    heroImage,
    imagesContainer,
    navigation
} from './Footer.css'

const socialLinks: SocialLinkType[] = [
    {
        type: SOCIAL_NETWORK_ICONS.GITHUB,
        url: 'https://github.com/bejzik8'
    },
    {
        type: SOCIAL_NETWORK_ICONS.TWITTER,
        url: 'https://twitter.com/bejzik8'
    },
    {
        type: SOCIAL_NETWORK_ICONS.TELEGRAM,
        url: 'https://t.me/bejzik'
    },
    {
        type: SOCIAL_NETWORK_ICONS.LINKEDIN,
        url: 'https://www.linkedin.com/in/mirkobasic'
    },
    {
        type: SOCIAL_NETWORK_ICONS.INSTAGRAM,
        url: 'https://www.instagram.com/b8zeek'
    }
]

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
                    className={bangImage}
                />
                <Image
                    width={142}
                    height={223}
                    src='/images/heroes/girl-1.svg'
                    alt='hero-girl'
                    className={heroImage}
                />
            </div>
            <div className={author}>
                <Subheading>
                    Devised, bootstrapped, designed and coded by Mirko Basic
                </Subheading>
                <div className={navigation}>
                    {socialLinks.map(({ type, url }) => (
                        <SocialLink
                            key={type}
                            socialNetworkType={type}
                            href={url}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
