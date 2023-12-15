import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const subheading = style({
    lineHeight: '1rem',
    fontSize: '1rem',
    fontWeight: 700,
    color: theme.colors.black
})
