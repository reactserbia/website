import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { HEADING_VARIANTS } from '@/constants'

const headingBase = style({
    position: 'relative',
    lineHeight: 1,
    fontSize: '4rem',
    fontWeight: 900,
    WebkitTextStroke: `2px ${theme.colors.no12textContrastHigh}`,
    margin: 0
})

export const span = style({
    position: 'absolute',
    left: 4,
    top: 4,
    zIndex: -1,
    color: theme.colors.no12textContrastHigh
})

export const heading = styleVariants({
    [HEADING_VARIANTS.PRIMARY]: [
        headingBase,
        { color: theme.colors.no3elementBackground }
    ],
    [HEADING_VARIANTS.SECONDARY]: [
        headingBase,
        { color: theme.colors.no6bordersNonInteractive }
    ]
})
