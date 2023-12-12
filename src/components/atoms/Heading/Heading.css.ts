import { style, styleVariants } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

import { COLOR_VARIANTS, SHADE_VARIANTS } from '@/constants'

const base = style({
    display: 'inline-block',
    position: 'relative',
    zIndex: 3,
    lineHeight: 1,
    fontSize: '2.5rem',
    fontWeight: 900,
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: theme.colors.black,
    margin: 0,

    '@media': {
        'screen and (min-width: 576px)': {
            fontSize: '3rem'
        },
        'screen and (min-width: 768px)': {
            fontSize: '4rem'
        }
    }
})

export const textColorVariants = styleVariants({
    [`${COLOR_VARIANTS.PRIMARY}-${SHADE_VARIANTS.LIGHT}`]: [
        base,
        {
            color: theme.colors.primary.no03
        }
    ],
    [`${COLOR_VARIANTS.PRIMARY}-${SHADE_VARIANTS.DARK}`]: [
        base,
        {
            color: theme.colors.primary.no06
        }
    ],
    [`${COLOR_VARIANTS.SECONDARY}-${SHADE_VARIANTS.LIGHT}`]: [
        base,
        {
            color: theme.colors.secondary.no03
        }
    ],
    [`${COLOR_VARIANTS.SECONDARY}-${SHADE_VARIANTS.DARK}`]: [
        base,
        {
            color: theme.colors.secondary.no06
        }
    ],
    [`${COLOR_VARIANTS.TERTIARY}-${SHADE_VARIANTS.LIGHT}`]: [
        base,
        {
            color: theme.colors.tertiary.no03
        }
    ],
    [`${COLOR_VARIANTS.TERTIARY}-${SHADE_VARIANTS.DARK}`]: [
        base,
        {
            color: theme.colors.tertiary.no06
        }
    ]
})

export const span = style({
    position: 'absolute',
    left: 3,
    top: 3,
    zIndex: -1,
    color: theme.colors.black,
    WebkitTextStrokeColor: theme.colors.black,
    whiteSpace: 'nowrap',
    userSelect: 'none',

    '@media': {
        'screen and (min-width: 576px)': {
            left: 4,
            top: 4
        },
        'screen and (min-width: 1024px)': {
            left: 5,
            top: 5
        }
    }
})
