import { Subheading } from '@/components/atoms'
import { containerVariants } from './InfoSection.css'
import { COLOR_VARIANTS } from '@/constants'

type InfoSectionProps = {
    heading: string
    colorVariant?: COLOR_VARIANTS
}

export function InfoSection({
    heading,
    colorVariant = COLOR_VARIANTS.PRIMARY
}: InfoSectionProps) {
    return (
        <section className={containerVariants[colorVariant]}>
            <Subheading colorVariant={colorVariant}>{heading}</Subheading>
        </section>
    )
}
