import { Heading } from '@/components/atoms'

import { container, content, banner } from './page.css'
import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'

export default function Home() {
    return (
        <main className={container}>
            <div className={content}>
                <Heading sizeVariant={SIZE_VARIANTS.LARGE}>WHO ARE WE?</Heading>
                <hr />
                <Heading sizeVariant={SIZE_VARIANTS.MEDIUM}>
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading>WHO ARE WE?</Heading>
                <hr />
                <Heading colorVariant={COLOR_VARIANTS.SECONDARY}>
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading colorVariant={COLOR_VARIANTS.TERTIARY}>
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading shadeVariant={SHADE_VARIANTS.DARK}>
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading
                    colorVariant={COLOR_VARIANTS.SECONDARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                >
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                >
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading
                    shadeVariant={SHADE_VARIANTS.DARK}
                    layers={LAYERS_VARIANTS.THREE}
                    sizeVariant={SIZE_VARIANTS.LARGE}
                >
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading
                    colorVariant={COLOR_VARIANTS.SECONDARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                    layers={LAYERS_VARIANTS.THREE}
                    sizeVariant={SIZE_VARIANTS.LARGE}
                >
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                    layers={LAYERS_VARIANTS.THREE}
                    sizeVariant={SIZE_VARIANTS.LARGE}
                >
                    WHO ARE WE?
                </Heading>
                <hr />
            </div>
        </main>
    )
}
