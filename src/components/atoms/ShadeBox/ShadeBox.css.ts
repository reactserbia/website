import { COLOR_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

const containerBase = style({
    display: 'inline-block',
    position: 'relative',
    zIndex: 1,
    padding: '0.25rem 1.75rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '999px'
})

export const container = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: [
        containerBase,
        {
            borderColor: theme.colors.primary.no12,
            backgroundColor: theme.colors.primary.no02,
            boxShadow: `6px 6px ${theme.colors.primary.no12}`
        }
    ],
    [COLOR_VARIANTS.SECONDARY]: [
        containerBase,
        {
            borderColor: theme.colors.secondary.no12,
            backgroundColor: theme.colors.secondary.no02,
            boxShadow: `6px 6px ${theme.colors.secondary.no12}`
        }
    ],
    [COLOR_VARIANTS.TERTIARY]: [
        containerBase,
        {
            borderColor: theme.colors.tertiary.no12,
            backgroundColor: theme.colors.tertiary.no02,
            boxShadow: `6px 6px ${theme.colors.tertiary.no12}`
        }
    ]
})
