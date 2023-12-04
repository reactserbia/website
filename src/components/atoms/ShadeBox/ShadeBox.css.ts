import { COLOR_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

const containerBase = style({
    padding: '24px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '999px'
})

export const container = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: [
        containerBase,
        {
            borderColor: theme.colors.primary.no12,
            boxShadow: `2px 2px ${theme.colors.primary.no12}`
        }
    ],
    [COLOR_VARIANTS.SECONDARY]: [
        containerBase,
        {
            borderColor: theme.colors.secondary.no12,
            boxShadow: `2px 2px ${theme.colors.secondary.no12}`
        }
    ],
    [COLOR_VARIANTS.TERTIARY]: [
        containerBase,
        {
            borderColor: theme.colors.tertiary.no12,
            boxShadow: `2px 2px ${theme.colors.tertiary.no12}`
        }
    ]
})
