import Image from 'next/image'

import { bannerContainer } from './Banner.css'
import { BoxedSubheading } from '@/components'

export function Banner() {
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
