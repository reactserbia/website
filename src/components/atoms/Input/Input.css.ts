import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const input = style({
    width: '100%',
    maxWidth: '300px',
    padding: '0.5rem 1rem',
    border: theme.border.small,
    borderRadius: 999,
    boxShadow: theme.boxShadow.small
})
