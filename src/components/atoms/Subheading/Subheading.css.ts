import { COLOR_VARIANTS } from '@/constants'
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
