import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const link = style({
    padding: '0.25rem',
    border: `1px solid ${theme.colors.black}`,
    borderRadius: '0.5rem'
})
