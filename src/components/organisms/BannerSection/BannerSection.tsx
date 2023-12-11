import Image from 'next/image'

import { bannerContainer, banner, linebreak } from './BannerSection.css'
import { BoxedSubheading } from '@/components'

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
        </section>
    )
}
