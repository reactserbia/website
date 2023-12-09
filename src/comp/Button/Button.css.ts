import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const button = style({
    padding: '0.5rem 1.5rem',
    border: `2px solid ${theme.colors.black}`,
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no02,
    fontSize: '1rem'
})
