import Image from 'next/image'

import {
    bannerContainer,
    banner,
    linebreak,
    navigation
} from './BannerSection.css'
import { BoxedSubheading, SocialLink } from '@/components'

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
                <SocialLink src='/images/github.svg' />
                <SocialLink src='/images/twitter.svg' />
                <SocialLink src='/images/telegram.svg' />
            </div>
        </section>
    )
}
