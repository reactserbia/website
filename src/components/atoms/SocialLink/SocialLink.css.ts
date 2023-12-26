import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const link = style({
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
    border: `2px solid ${theme.colors.black}`,
    borderRadius: '0.5rem',
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: theme.boxShadow.small,
    cursor: 'pointer',
    selectors: {
        '&:hover': {
            backgroundColor: theme.colors.tertiary.no03
        },
        '&:disabled': {
            opacity: 0.3,
            boxShadow: 'none',
            cursor: 'not-allowed'
        }
    }
})

export const networkLogo = style({
    display: 'block'
})
