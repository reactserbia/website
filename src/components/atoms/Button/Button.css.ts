import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const button = style({
    width: '100%',
    padding: '0.5rem 1.25rem',
    border: `2px solid ${theme.colors.black}`,
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no02,
    lineHeight: 1,
    fontSize: '1rem',
    fontFamily: 'inherit',
    fontWeight: 700,
    color: theme.colors.black,
    textDecoration: 'none',
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
