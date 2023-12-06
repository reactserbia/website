import { COLOR_VARIANTS, SIZE_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

const subheadingBase = style({
    lineHeight: 1,
    fontSize: '2rem',
    fontWeight: 800
})

export const subheadningVariants = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: [
        subheadingBase,
        {
            color: theme.colors.primary.no12
        }
    ],
    [COLOR_VARIANTS.SECONDARY]: [
        subheadingBase,
        {
            color: theme.colors.primary.no12
        }
    ],
    [COLOR_VARIANTS.TERTIARY]: [
        subheadingBase,
        {
            color: theme.colors.primary.no12
        }
    ]
})

export const sizeVariants = styleVariants({
    [SIZE_VARIANTS.SMALL]: {
        fontSize: '1.5rem'
    },
    [SIZE_VARIANTS.MEDIUM]: {
        fontSize: '2rem'
    },
    [SIZE_VARIANTS.LARGE]: {
        fontSize: '2.5rem'
    }
})
