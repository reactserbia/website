import { style, styleVariants } from '@vanilla-extract/css'

import { SIZE_VARIANTS } from '@/constants'
import { theme } from '@/style'
import { flexCenter } from '@/style/utils'

export const containerBase = style({
    ...flexCenter,
    border: theme.border.small,
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no03,
    boxShadow: theme.boxShadow.small
})

export const container = styleVariants({
    [SIZE_VARIANTS.LARGE]: [
        containerBase,
        {
            width: '3rem',
            height: '3rem'
        }
    ],
    [SIZE_VARIANTS.MEDIUM]: [
        containerBase,
        {
            width: '2.5rem',
            height: '2.5rem'
        }
    ],
    [SIZE_VARIANTS.SMALL]: [
        containerBase,
        {
            width: '2rem',
            height: '2rem'
        }
    ]
})

export const logoImageBase = style({
    width: '2rem',
    height: '2rem'
})

export const logoImage = styleVariants({
    [SIZE_VARIANTS.LARGE]: {
        width: '2rem',
        height: '2rem'
    },
    [SIZE_VARIANTS.MEDIUM]: {
        width: '1.6rem',
        height: '1.6rem'
    },
    [SIZE_VARIANTS.SMALL]: {
        width: '1.2rem',
        height: '1.2rem'
    }
})
