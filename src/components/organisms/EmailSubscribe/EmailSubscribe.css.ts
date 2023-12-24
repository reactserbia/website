import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.5rem'
})

export const input = style({
    display: 'block',
    width: '100%',
    maxWidth: '300px',
    padding: '0.5rem 1rem',
    border: theme.border.small,
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: theme.boxShadow.small
})
