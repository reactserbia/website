import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
    display: 'inline-block',
    position: 'relative',
    lineHeight: 1,
    fontWeight: 900,
    WebkitTextStrokeWidth: '1px',
    margin: 0,

    WebkitTextStrokeColor: theme.colors.primary.no12,
    color: 'white'
})

export const textColor = styleVariants({
    primary: {
        color: theme.colors.primary.no03
    },
    secondary: {
        color: theme.colors.secondary.no06
    },
    tertiary: {
        color: theme.colors.tertiary.no09
    }
})

export const spanBase = style({
    position: 'absolute',
    left: 3,
    top: 3,
    zIndex: -1,
    color: theme.colors.primary.no12,
    whiteSpace: 'nowrap',
    userSelect: 'none'
})
