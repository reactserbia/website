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
    fontFamily: 'inherit',
    textAlign: 'center',
    boxShadow: theme.boxShadow.small
})
