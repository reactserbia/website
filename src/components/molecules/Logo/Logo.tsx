import { Heading } from '@/components/atoms'

import { HEADING_VARIANTS } from '@/constants'

export function Logo() {
    return (
        <div>
            <Heading>REACT</Heading>
            <Heading variant={HEADING_VARIANTS.BIG_SECONDARY}>SERBIA</Heading>
        </div>
    )
}
