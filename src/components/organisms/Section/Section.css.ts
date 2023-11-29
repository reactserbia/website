import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    maxWidth: '300px',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: `1px solid ${theme.colors.no12textContrastHigh}`,
    boxShadow: `4px 4px 0 ${theme.colors.no6bordersNonInteractive}`,
    margin: '1rem auto 0'
})
