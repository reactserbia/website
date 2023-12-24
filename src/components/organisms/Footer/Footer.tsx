import Image from 'next/image'

import {
    BoxedHeading,
    BoxedParagraph,
    EmailSubscribe,
    SocialLink,
    Subheading
} from '@/components'
import {
    COLOR_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS,
    socialLinksMirko,
    socialLinksReactSerbia
} from '@/constants'
import { headingContainer } from '@/style'

import {
    author,
    bangImage,
    clouds,
    connectContent,
    connectSection,
    container,
    content,
    heroImage,
    imagesContainer,
    navigation,
    socialNetworks
} from './Footer.css'

export function Footer() {
    return (
        <section className={container}>
            <div className={content}>
                <Image
                    width={902}
                    height={123}
                    src='/images/clouds/contact-clouds.svg'
                    alt='clouds'
                    className={clouds}
                />
                <div className={headingContainer}>
                    <BoxedHeading
                        colorVariant={COLOR_VARIANTS.TERTIARY}
                        shadeVariant={SHADE_VARIANTS.DARK}
                    >
                        CONTACT
                    </BoxedHeading>
                    <BoxedParagraph>
                        We are most definitely open to all ideas! We love
                        negative criticism more than positive and very much
                        appreciate the ones who are willing to share it with us;
                        we know it is for the better. We need you, to engage in
                        order to grow together, in order to create the big
                        things. We know that together, we are more than capable
                        of doing it otherwise we would not be here. Do not
                        hesitate to reach out, give your contribution and write
                        this story with us! Let us make a change together. 🍀
                    </BoxedParagraph>
                </div>
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
                <div className={connectSection}>
                    <BoxedParagraph sizeVariant={SIZE_VARIANTS.MEDIUM}>
                        If this seems interesting to you and want to stay up to
                        date, make sure to follow us on social networks,
                        subscribe to the newsletter and be notified every time
                        something interested is happening.
                        <br />
                        <br />
                        We promise not to spam you with unnecessary information!
                        <br />
                        <br />
                        🚀
                    </BoxedParagraph>
                    <div className={connectContent}>
                        <div className={socialNetworks}>
                            {socialLinksReactSerbia.map(({ type, url }) => (
                                <SocialLink
                                    key={type}
                                    socialNetworkType={type}
                                    href={url}
                                />
                            ))}
                        </div>
                        <EmailSubscribe />
                    </div>
                </div>
                <div className={author}>
                    <Subheading>
                        Devised, bootstrapped, designed and coded by Mirko Basic
                        🍀
                    </Subheading>
                    <div className={navigation}>
                        {socialLinksMirko.map(({ type, url }) => (
                            <SocialLink
                                key={type}
                                socialNetworkType={type}
                                href={url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
