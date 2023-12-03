import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { HEADING_VARIANTS } from '@/constants'

const headingBase = style({
    display: 'inline-block',
    position: 'relative',
    lineHeight: 1,
    fontSize: '4rem',
    fontWeight: 900,
    WebkitTextStroke: `1px ${theme.colors.primary.no12}`,
    margin: 0
})

export const spanBase = style({
    position: 'absolute',
    zIndex: -1,
    color: theme.colors.primary.no12,
    whiteSpace: 'nowrap'
})

export const heading = styleVariants({
    [HEADING_VARIANTS.SMALL_PRIMARY]: [
        headingBase,
        {
            color: theme.colors.primary.no03,
            fontSize: `calc(${theme.dimensions.spacingUnit} * 8)`
        }
    ],
    [HEADING_VARIANTS.SMALL_SECONDARY]: [
        headingBase,
        {
            color: theme.colors.primary.no06,
            fontSize: `calc(${theme.dimensions.spacingUnit} * 8)`
        }
    ],
    [HEADING_VARIANTS.MEDIUM_PRIMARY]: [
        headingBase,
        {
            color: theme.colors.primary.no03,
            fontSize: `calc(${theme.dimensions.spacingUnit} * 8)`
        }
    ],
    [HEADING_VARIANTS.MEDIUM_SECONDARY]: [
        headingBase,
        {
            color: theme.colors.primary.no06,
            fontSize: `calc(${theme.dimensions.spacingUnit} * 8)`
        }
    ],
    [HEADING_VARIANTS.BIG_PRIMARY]: [
        headingBase,
        {
            color: theme.colors.primary.no03,
            fontSize: '4rem'
        }
    ],
    [HEADING_VARIANTS.BIG_SECONDARY]: [
        headingBase,
        {
            color: theme.colors.primary.no06,
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
