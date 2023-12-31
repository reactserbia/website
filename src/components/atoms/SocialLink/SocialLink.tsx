import Link from 'next/link'

import { SOCIAL_NETWORK_ICONS } from '@/models'

import { link } from './SocialLink.css'
import { SocialNetworkIcon } from '../SocialNetworkIcon/SocialNetworkIcon'

type SocialLinkProps = {
    socialNetworkType: SOCIAL_NETWORK_ICONS
    href: string
}

export function SocialLink({ socialNetworkType, href }: SocialLinkProps) {
    return (
        <Link className={link} href={href} target='_blank'>
            <SocialNetworkIcon type={socialNetworkType} />
        </Link>
    )
}
