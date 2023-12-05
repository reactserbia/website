import { COLOR_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

const buttonBase = style({
    padding: '0.5rem 1rem',
    borderRadius: 999,
    lineHeight: 1,
    fontSize: '1rem',
    fontWeight: 500
})

export const buttonVariants = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: [
        buttonBase,
        {
            border: `1px solid ${theme.colors.primary.no12}`,
            color: theme.colors.primary.no01,
            backgroundColor: theme.colors.primary.no11
        }
    ],
    [COLOR_VARIANTS.SECONDARY]: [
        buttonBase,
        {
            border: `1px solid ${theme.colors.secondary.no12}`,
            color: theme.colors.secondary.no01,
            backgroundColor: theme.colors.secondary.no11
        }
    ],
    [COLOR_VARIANTS.TERTIARY]: [
        buttonBase,
        {
            border: `1px solid ${theme.colors.tertiary.no12}`,
            color: theme.colors.tertiary.no01,
            backgroundColor: theme.colors.tertiary.no11
        }
    ]
})
