import { style, styleVariants } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

import {
    COLOR_VARIANTS,
    LAYERS_VARIANTS,
    SHADE_VARIANTS,
    SIZE_VARIANTS
} from '@/constants'

export const base = style({
    display: 'inline-block',
    position: 'relative',
    zIndex: 3,
    lineHeight: 1,
    fontWeight: 900,
    WebkitTextStrokeWidth: '1px',
    margin: 0
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

export const textColorVariants = styleVariants({
    [`${COLOR_VARIANTS.PRIMARY}-${SHADE_VARIANTS.LIGHT}`]: {
        color: theme.colors.primary.no03
    },
    [`${COLOR_VARIANTS.PRIMARY}-${SHADE_VARIANTS.DARK}`]: {
        color: theme.colors.primary.no06
    },
    [`${COLOR_VARIANTS.SECONDARY}-${SHADE_VARIANTS.LIGHT}`]: {
        color: theme.colors.secondary.no03
    },
    [`${COLOR_VARIANTS.SECONDARY}-${SHADE_VARIANTS.DARK}`]: {
        color: theme.colors.secondary.no06
    },
    [`${COLOR_VARIANTS.TERTIARY}-${SHADE_VARIANTS.LIGHT}`]: {
        color: theme.colors.tertiary.no03
    },
    [`${COLOR_VARIANTS.TERTIARY}-${SHADE_VARIANTS.DARK}`]: {
        color: theme.colors.tertiary.no06
    }
})

export const strokeColorVariants = styleVariants({
    [`${COLOR_VARIANTS.PRIMARY}-${LAYERS_VARIANTS.TWO}`]: {
        WebkitTextStrokeColor: theme.colors.primary.no12
    },
    [`${COLOR_VARIANTS.PRIMARY}-${LAYERS_VARIANTS.THREE}`]: {
        WebkitTextStrokeColor: theme.colors.primary.no11
    },
    [`${COLOR_VARIANTS.SECONDARY}-${LAYERS_VARIANTS.TWO}`]: {
        WebkitTextStrokeColor: theme.colors.secondary.no12
    },
    [`${COLOR_VARIANTS.SECONDARY}-${LAYERS_VARIANTS.THREE}`]: {
        WebkitTextStrokeColor: theme.colors.secondary.no11
    },
    [`${COLOR_VARIANTS.TERTIARY}-${LAYERS_VARIANTS.TWO}`]: {
        WebkitTextStrokeColor: theme.colors.tertiary.no12
    },
    [`${COLOR_VARIANTS.TERTIARY}-${LAYERS_VARIANTS.THREE}`]: {
        WebkitTextStrokeColor: theme.colors.tertiary.no11
    }
})

export const spanBase = style({
    position: 'absolute',
    whiteSpace: 'nowrap',
    userSelect: 'none'
})

export const spanOneColorVariants = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: {
        zIndex: -1,
        color: theme.colors.primary.no11,
        WebkitTextStrokeColor: theme.colors.primary.no11
    },
    [COLOR_VARIANTS.SECONDARY]: {
        zIndex: -1,
        color: theme.colors.secondary.no11,
        WebkitTextStrokeColor: theme.colors.secondary.no11
    },
    [COLOR_VARIANTS.TERTIARY]: {
        zIndex: -1,
        color: theme.colors.tertiary.no11,
        WebkitTextStrokeColor: theme.colors.tertiary.no11
    }
})

export const spanTwoColorVariants = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: {
        zIndex: -2,
        color: theme.colors.primary.no12,
        WebkitTextStrokeColor: theme.colors.primary.no12
    },
    [COLOR_VARIANTS.SECONDARY]: {
        zIndex: -2,
        color: theme.colors.secondary.no12,
        WebkitTextStrokeColor: theme.colors.secondary.no12
    },
    [COLOR_VARIANTS.TERTIARY]: {
        zIndex: -2,
        color: theme.colors.tertiary.no12,
        WebkitTextStrokeColor: theme.colors.tertiary.no12
    }
})

export const spanOneSizeVariants = styleVariants({
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

export const spanTwoSizeVariants = styleVariants({
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
