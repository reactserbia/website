import { Paragraph, Subheading } from '@/components/atoms'
import { containerVariants } from './InfoSection.css'
import { COLOR_VARIANTS } from '@/constants'

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
            <Paragraph>{content}</Paragraph>
        </section>
    )
}
