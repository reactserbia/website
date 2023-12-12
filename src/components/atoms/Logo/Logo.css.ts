import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const container = style({
    width: '3rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: theme.border.small,
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no03,
    boxShadow: theme.boxShadow.small
})

export const logoImage = style({
    width: '2rem',
    height: '2rem'
})
