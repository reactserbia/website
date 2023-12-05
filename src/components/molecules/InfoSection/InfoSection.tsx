import { Button, Paragraph, Subheading } from '@/components/atoms'
import { containerVariants } from './InfoSection.css'
import { COLOR_VARIANTS } from '@/constants'
import Image from 'next/image'

type InfoSectionProps = {
    heading: string
    content?: string
    colorVariant?: COLOR_VARIANTS
}

export function InfoSection({
    heading,
    content,
    colorVariant = COLOR_VARIANTS.PRIMARY
}: InfoSectionProps) {
    return (
        <section className={containerVariants[colorVariant]}>
            <Subheading colorVariant={colorVariant}>{heading}</Subheading>
            <Image
                width={104}
                height={22}
                src='/images/stars.svg'
                alt='stars'
            />
            <Paragraph>{content}</Paragraph>
            <Button colorVariant={colorVariant}>Learn More</Button>
        </section>
    )
}
