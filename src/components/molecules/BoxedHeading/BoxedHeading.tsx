import { Heading, HeadingProps, ShadeBox } from '@/components/atoms'

type BoxedHeadingProps = HeadingProps

export function BoxedHeading({
    children,
    colorVariant,
    shadeVariant
}: BoxedHeadingProps) {
    return (
        <ShadeBox colorVariant={colorVariant}>
            <Heading colorVariant={colorVariant} shadeVariant={shadeVariant}>
                {children}
            </Heading>
        </ShadeBox>
    )
}
