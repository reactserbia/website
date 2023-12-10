import Image from 'next/image'

import { bannerContainer, banner } from './BannerSection.css'
import { BoxedSubheading } from '@/components'

export function BannerSection() {
    return (
        <section className={bannerContainer}>
            <Image
                width={857}
                height={216}
                src='/images/big-banner.svg'
                alt='banner'
                className={banner}
            />
            <BoxedSubheading>Super-charging React Community</BoxedSubheading>
        </section>
    )
}
