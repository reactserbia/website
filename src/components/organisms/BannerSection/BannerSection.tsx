import Image from 'next/image'

import { bannerContainer } from './BannerSection.css'
import { BoxedSubheading } from '@/components'

export function BannerSection() {
    return (
        <div className={bannerContainer}>
            <Image
                width={857}
                height={216}
                src='/images/big-banner.svg'
                alt='banner'
            />
            <BoxedSubheading>Super-charging React Community</BoxedSubheading>
        </div>
    )
}
