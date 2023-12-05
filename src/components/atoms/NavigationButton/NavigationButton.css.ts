import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const button = style({
    position: 'relative',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer'
})

export const spanBase = style({
    display: 'inline-block',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.colors.primary.no12
})

export const span = style([
    spanBase,
    {
        border: `1px solid ${theme.colors.primary.no12}`,
        backgroundColor: theme.colors.primary.no12
    }
])

export const absoluteSpan = style([
    spanBase,
    {
        position: 'absolute',
        bottom: 4,
        right: 4,
        zIndex: 1,
        border: `1px solid ${theme.colors.primary.no11}`,
        backgroundColor: theme.colors.primary.no03,
        boxShadow: `4px 4px ${theme.colors.primary.no11}`,
        transition: 'all 0.2s ease-in-out',

        selectors: {
            [`${button}:hover &`]: {
                bottom: 8,
                right: 8
            }
        }
    }
])
