import {
    BannerBig,
    BannerSmall,
    BoxedSubheading,
    SocialLink
} from '@/components'
import { socialLinksReactSerbia } from '@/constants'

import {
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
                <BannerBig />
                <BannerSmall />
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
