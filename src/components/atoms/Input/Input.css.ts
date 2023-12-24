import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const input = style({
    width: '100%',
    maxWidth: '300px',
    padding: '0.5rem 1rem',
    border: theme.border.small,
    borderRadius: 999,
    outline: 'none',
    backgroundColor: theme.colors.tertiary.no02,
    lineHeight: '16px',
    fontSize: '0.75rem',
    fontFamily: 'inherit',
    textAlign: 'center',
    boxShadow: theme.boxShadow.small,

    '@media': {
        'screen and (min-width: 576px)': {
            fontSize: '0.875rem'
        }
    }
})
