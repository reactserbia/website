import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const paragraph = style({
    lineHeight: 1.5,
    fontSize: '1rem',
    color: theme.colors.black
})
