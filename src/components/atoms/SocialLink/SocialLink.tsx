import Image from 'next/image'

import { link, networkLogo } from './SocialLink.css'

type SocialLinkProps = {
    imageSrc: string
    href: string
}

export function SocialLink({ imageSrc, href }: SocialLinkProps) {
    return (
        <a className={link} href={href} target='_blank'>
            <Image
                width={20}
                height={20}
                src={imageSrc}
                alt='Github'
                className={networkLogo}
            />
        </a>
    )
}
