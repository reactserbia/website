import Image from 'next/image'

import { BoxedSubheading, SocialLink } from '@/components'
import { socialLinksReactSerbia } from '@/constants'

import {
    banner,
    bannerBig,
    bannerContainer,
    bannerContent,
    linebreak,
    navigation,
    space
} from './BannerSection.css'

export function BannerSection() {
    return (
        <section className={bannerContainer}>
            <div className={bannerContent}>
                <Image
                    width={857}
                    height={216}
                    src='/images/rs-logo-small.svg'
                    alt='banner'
                    className={banner}
                    priority
                />
                <Image
                    width={800}
                    height={215}
                    src='/images/banner-big.svg'
                    alt='banner'
                    className={bannerBig}
                    priority
                />
                <BoxedSubheading>
                    Super-charging
                    <span className={space}> </span>
                    <br className={linebreak} />
                    React Community
                </BoxedSubheading>
                <div className={navigation}>
                    {socialLinksReactSerbia.map(({ type, url }) => (
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
