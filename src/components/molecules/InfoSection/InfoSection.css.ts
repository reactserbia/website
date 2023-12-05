import { style, styleVariants } from '@vanilla-extract/css'

import { COLOR_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'

const containerBase = style({
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '24px',
    borderRadius: 16,
    boxShadow: `6px 6px ${theme.colors.primary.no12}`
})

export const containerVariants = styleVariants({
    [COLOR_VARIANTS.PRIMARY]: [
        containerBase,
        {
            border: `2px solid ${theme.colors.primary.no12}`,
            backgroundColor: theme.colors.primary.no03,
            boxShadow: `6px 6px ${theme.colors.primary.no12}`
        }
    ],
    [COLOR_VARIANTS.SECONDARY]: [
        containerBase,
        {
            border: `2px solid ${theme.colors.secondary.no12}`,
            backgroundColor: theme.colors.secondary.no03,
            boxShadow: `6px 6px ${theme.colors.secondary.no12}`
        }
    ],
    [COLOR_VARIANTS.TERTIARY]: [
        containerBase,
        {
            border: `2px solid ${theme.colors.tertiary.no12}`,
            backgroundColor: theme.colors.tertiary.no03,
            boxShadow: `6px 6px ${theme.colors.tertiary.no12}`
        }
    ]
})
