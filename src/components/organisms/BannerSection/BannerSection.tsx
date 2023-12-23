import Image from 'next/image'

import { BoxedSubheading, SocialLink } from '@/components'
import { SOCIAL_NETWORK_ICONS, SocialLinkType } from '@/models'

import {
    banner,
    bannerBig,
    bannerContainer,
    bannerContent,
    linebreak,
    navigation,
    space
} from './BannerSection.css'

const socialLinks: SocialLinkType[] = [
    {
        type: SOCIAL_NETWORK_ICONS.GITHUB,
        url: 'https://github.com/ReactSerbia'
    },
    {
        type: SOCIAL_NETWORK_ICONS.TWITTER,
        url: 'https://twitter.com/reactserbia'
    },
    {
        type: SOCIAL_NETWORK_ICONS.TELEGRAM,
        url: 'https://t.me/+puv-aR71sU1iNTlk'
    }
]

export function BannerSection() {
    return (
        <section className={bannerContainer}>
            <div className={bannerContent}>
                <Image
                    width={857}
                    height={216}
                    src='/images/react-serbia.svg'
                    alt='banner'
                    className={banner}
                />
                <Image
                    width={800}
                    height={215}
                    src='/images/banner-big.svg'
                    alt='banner'
                    className={bannerBig}
                />
                <BoxedSubheading>
                    Super-charging
                    <span className={space}> </span>
                    <br className={linebreak} />
                    React Community
                </BoxedSubheading>
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
