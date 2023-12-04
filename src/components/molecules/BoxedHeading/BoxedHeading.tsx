import { Heading, HeadingProps, ShadeBox } from '@/components/atoms'
import { ReactNode } from 'react'

type BoxedHeadingProps = HeadingProps

export function BoxedHeading({
    children,
    colorVariant,
    sizeVariant,
    layers,
    shadeVariant
}: BoxedHeadingProps) {
    return (
        <ShadeBox>
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
