import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { HEADING_VARIANTS } from '@/constants'

const headingBase = style({
    display: 'inline-block',
    position: 'relative',
    lineHeight: 1,
    fontSize: '4rem',
    fontWeight: 900,
    WebkitTextStroke: `2px ${theme.colors.no12textContrastHigh}`,
    margin: 0
})

export const spanBase = style({
    position: 'absolute',
    zIndex: -1,
    color: theme.colors.no12textContrastHigh,
    whiteSpace: 'nowrap'
})

export const heading = styleVariants({
    [HEADING_VARIANTS.SMALL_PRIMARY]: [
        headingBase,
        {
            color: theme.colors.no3elementBackground,
            fontSize: `calc(${theme.dimensions.spacingUnit} * 8)`
        }
    ],
    [HEADING_VARIANTS.SMALL_SECONDARY]: [
        headingBase,
        {
            color: theme.colors.no6bordersNonInteractive,
            fontSize: `calc(${theme.dimensions.spacingUnit} * 8)`
        }
    ],
    [HEADING_VARIANTS.MEDIUM_PRIMARY]: [
        headingBase,
        {
            color: theme.colors.no3elementBackground,
            fontSize: '3rem'
        }
    ],
    [HEADING_VARIANTS.MEDIUM_SECONDARY]: [
        headingBase,
        {
            color: theme.colors.no6bordersNonInteractive,
            fontSize: '3rem'
        }
    ],
    [HEADING_VARIANTS.BIG_PRIMARY]: [
        headingBase,
        {
            color: theme.colors.no3elementBackground,
            fontSize: '4rem'
        }
    ],
    [HEADING_VARIANTS.BIG_SECONDARY]: [
        headingBase,
        {
            color: theme.colors.no6bordersNonInteractive,
            fontSize: '4rem'
        }
    ]
})

export const span = styleVariants({
    [HEADING_VARIANTS.SMALL_PRIMARY]: [
        spanBase,
        {
            top: `calc(${theme.dimensions.spacingUnit} * 0.5)`,
            left: `calc(${theme.dimensions.spacingUnit} * 0.5)`
        }
    ],
    [HEADING_VARIANTS.SMALL_SECONDARY]: [
        spanBase,
        {
            top: `calc(${theme.dimensions.spacingUnit} * 0.5)`,
            left: `calc(${theme.dimensions.spacingUnit} * 0.5)`
        }
    ],
    [HEADING_VARIANTS.MEDIUM_PRIMARY]: [
        spanBase,
        {
            top: `calc(${theme.dimensions.spacingUnit} * 0.75)`,
            left: `calc(${theme.dimensions.spacingUnit} * 0.75)`
        }
    ],
    [HEADING_VARIANTS.MEDIUM_SECONDARY]: [
        spanBase,
        {
            top: `calc(${theme.dimensions.spacingUnit} * 0.75)`,
            left: `calc(${theme.dimensions.spacingUnit} * 0.75)`
        }
    ],
    [HEADING_VARIANTS.BIG_PRIMARY]: [
        spanBase,
        {
            top: theme.dimensions.spacingUnit,
            left: theme.dimensions.spacingUnit
        }
    ],
    [HEADING_VARIANTS.BIG_SECONDARY]: [
        spanBase,
        {
            top: theme.dimensions.spacingUnit,
            left: theme.dimensions.spacingUnit
        }
    ]
})
