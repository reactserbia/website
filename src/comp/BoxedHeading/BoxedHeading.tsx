import { Heading, HeadingProps } from '../Heading/Heading'
import { ShadeBox } from '../ShadeBox/ShadeBox'

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
