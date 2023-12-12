import Image from 'next/image'
import { link } from './SocialLink.css'

export function SocialLink() {
    return (
        <a className={link}>
            <Image
                width={20}
                height={20}
                src='/images/github.svg'
                alt='Github'
            />
        </a>
    )
}
