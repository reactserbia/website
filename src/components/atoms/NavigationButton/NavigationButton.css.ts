import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const buttonBase = style({
    position: 'relative',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer'
})

export const spanBase = style({
    display: 'inline-block',
    padding: '0.5rem',
    border: `1px solid ${theme.colors.primary.no11}`,
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.primary.no12,
    backgroundColor: theme.colors.primary.no03
})

export const absoluteSpan = style([
    spanBase,
    {
        position: 'absolute',
        top: 4,
        left: 4,
        zIndex: -1,
        backgroundColor: theme.colors.primary.no11
    }
])
