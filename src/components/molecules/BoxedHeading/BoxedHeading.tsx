import { Heading, HeadingProps, ShadeBox } from '@/components/atoms'

type BoxedHeadingProps = HeadingProps

export function BoxedHeading({
    children,
    colorVariant,
    sizeVariant,
    layers,
    shadeVariant
}: BoxedHeadingProps) {
    return (
        <ShadeBox colorVariant={colorVariant}>
            <Heading
                colorVariant={colorVariant}
                sizeVariant={sizeVariant}
                layers={layers}
                shadeVariant={shadeVariant}
            >
                {children}
            </Heading>
        </ShadeBox>
    )
}
