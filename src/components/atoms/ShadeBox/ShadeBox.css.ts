import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    display: 'inline-block',
    position: 'relative',
    zIndex: 1,
    padding: '0.25rem 1.75rem',
    border: `2px solid ${theme.colors.black}`,
    borderRadius: '999px',
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: `4px 4px ${theme.colors.black}`,

    '@media': {
        'screen and (min-width: 576px)': {
            boxShadow: `6px 6px ${theme.colors.black}`
        }
    }
})
