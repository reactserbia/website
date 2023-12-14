import Image from 'next/image'

import { BoxedSubheading, SocialLink } from '@/components'

import {
    banner,
    bannerContainer,
    linebreak,
    navigation
} from './BannerSection.css'

enum SOCIAL_LINK_TYPE {
    GITHUB = 'github',
    TWITTER = 'twitter',
    TELEGRAM = 'telegram'
}

type SocialLink = {
    type: SOCIAL_LINK_TYPE
    url: string
}

const socialLinks: SocialLink[] = [
    {
        type: SOCIAL_LINK_TYPE.GITHUB,
        url: 'https://github.com/ReactSerbia'
    },
    {
        type: SOCIAL_LINK_TYPE.TWITTER,
        url: 'https://twitter.com/reactserbia'
    },
    {
        type: SOCIAL_LINK_TYPE.TELEGRAM,
        url: 'https://t.me/+puv-aR71sU1iNTlk'
    }
]

export function BannerSection() {
    return (
        <section className={bannerContainer}>
            <Image
                width={857}
                height={216}
                src='/images/react-serbia.svg'
                alt='banner'
                className={banner}
            />
            <BoxedSubheading>
                Super-charging
                <br className={linebreak} />
                React Community
            </BoxedSubheading>
            <div className={navigation}>
                {socialLinks.map(({ type, url }) => (
                    <SocialLink
                        key={type}
                        imageSrc={`/images/${type}.svg`}
                        href={url}
                    />
                ))}
            </div>
        </section>
    )
}
