import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { COLOR_VARIANTS, SIZE_VARIANTS } from '@/constants'

export const base = style({
    display: 'inline-block',
    position: 'relative',
    lineHeight: 1,
    fontWeight: 900,
    WebkitTextStrokeWidth: '1px',
    margin: 0
})

export const spanBase = style({
    position: 'absolute',
    left: 3,
    top: 3,
    zIndex: -1,
    color: theme.colors.primary.no12,
    whiteSpace: 'nowrap',
    userSelect: 'none'
})

export const textColorVariants = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: {
        color: theme.colors.primary.no03,
        WebkitTextStrokeColor: theme.colors.primary.no12
    },
    [COLOR_VARIANTS.SECONDARY]: {
        color: theme.colors.secondary.no03,
        WebkitTextStrokeColor: theme.colors.secondary.no12
    },
    [COLOR_VARIANTS.TERTIARY]: {
        color: theme.colors.tertiary.no03,
        WebkitTextStrokeColor: theme.colors.tertiary.no12
    }
})

export const sizeVariants = styleVariants({
    [SIZE_VARIANTS.SMALL]: {
        fontSize: '2rem'
    },
    [SIZE_VARIANTS.MEDIUM]: {
        fontSize: '2.5rem'
    },
    [SIZE_VARIANTS.LARGE]: {
        fontSize: '3rem'
    }
})
