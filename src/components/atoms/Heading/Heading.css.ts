import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

import { COLOR_VARIANTS, LAYERS_VARIANTS, SIZE_VARIANTS } from '@/constants'

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
    whiteSpace: 'nowrap',
    userSelect: 'none'
})

export const spanColorVariants = styleVariants({
    first: {
        zIndex: -1,
        color: theme.colors.primary.no11
    },
    last: {
        zIndex: -2,
        color: theme.colors.primary.no12
    }
})

export const spanOneVariants = styleVariants({
    [SIZE_VARIANTS.SMALL]: [
        spanBase,
        {
            left: 3,
            top: 3
        }
    ],
    [SIZE_VARIANTS.MEDIUM]: [
        spanBase,
        {
            left: 4,
            top: 4
        }
    ],
    [SIZE_VARIANTS.LARGE]: [
        spanBase,
        {
            left: 5,
            top: 5
        }
    ]
})

export const spanTwoVariants = styleVariants({
    [SIZE_VARIANTS.SMALL]: [
        spanBase,
        {
            left: 6,
            top: 6
        }
    ],
    [SIZE_VARIANTS.MEDIUM]: [
        spanBase,
        {
            left: 8,
            top: 8
        }
    ],
    [SIZE_VARIANTS.LARGE]: [
        spanBase,
        {
            left: 10,
            top: 10
        }
    ]
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
        fontSize: '3rem'
    },
    [SIZE_VARIANTS.LARGE]: {
        fontSize: '4rem'
    }
})
