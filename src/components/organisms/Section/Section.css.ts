import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    maxWidth: '300px',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${theme.colors.primary.no12}`,
    boxShadow: `4px 4px 0 ${theme.colors.primary.no06}`,
    margin: '1rem auto 0'
})
