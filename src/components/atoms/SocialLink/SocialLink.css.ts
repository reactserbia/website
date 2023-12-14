import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const link = style({
    display: 'inline-block',
    padding: '0.25rem',
    border: `2px solid ${theme.colors.black}`,
    borderRadius: '0.5rem',
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: theme.boxShadow.small,
    cursor: 'pointer'
})

export const networkLogo = style({
    display: 'block'
})