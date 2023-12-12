import Image from 'next/image'
import { link } from './SocialLink.css'

type SocialLinkProps = {
    src: string
}

export function SocialLink({ src }: SocialLinkProps) {
    return (
        <a className={link}>
            <Image width={20} height={20} src={src} alt='Github' />
        </a>
    )
}
