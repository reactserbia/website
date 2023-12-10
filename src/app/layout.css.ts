import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const body = style({
    padding: '1rem'
})

export const container = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    margin: '0 auto'
})
