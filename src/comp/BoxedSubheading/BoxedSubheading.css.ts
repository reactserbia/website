import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const subheading = style({
    padding: '0rem 1.5rem 0.25rem',
    border: theme.border,
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no02,
    lineHeight: 1,
    fontSize: '1.25rem',
    color: theme.colors.black,
    boxShadow: theme.boxShadow.small
})
