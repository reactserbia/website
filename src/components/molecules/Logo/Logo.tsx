import { Heading } from '@/components/atoms'

import { HEADING_VARIANTS } from '@/constants'

export function Logo() {
    return (
        <div>
            <Heading>REACT</Heading>
            <Heading variant={HEADING_VARIANTS.SECONDARY}>SERBIA</Heading>
        </div>
    )
}
