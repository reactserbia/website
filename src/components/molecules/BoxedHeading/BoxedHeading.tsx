import { Heading, HeadingProps, ShadeBox } from '@/components/atoms'

type BoxedHeadingProps = HeadingProps

export function BoxedHeading({
    children,
    colorVariant,
    shadeVariant
}: BoxedHeadingProps) {
    return (
        <ShadeBox>
            <Heading colorVariant={colorVariant} shadeVariant={shadeVariant}>
                {children}
            </Heading>
        </ShadeBox>
    )
}
