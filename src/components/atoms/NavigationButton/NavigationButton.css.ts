import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const buttonBase = style({
    padding: '0.5rem',
    border: `1px solid ${theme.colors.primary.no11}`,
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.primary.no12,
    backgroundColor: theme.colors.primary.no03
})

export const buttonSpan = style({})
