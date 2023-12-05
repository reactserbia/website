import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const buttonBase = style({
    position: 'relative',
    border: 'none'
})

export const buttonSpan = style({
    display: 'inline-block',
    padding: '0.5rem',
    border: `1px solid ${theme.colors.primary.no11}`,
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.primary.no12,
    backgroundColor: theme.colors.primary.no03
})
