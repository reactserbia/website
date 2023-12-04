import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '59px',
    height: '59px',
    position: 'relative'
})

const circleBase = style({
    width: '56px',
    height: '56px',
    borderRadius: '999px',
    border: `2px solid ${theme.colors.primary.no12}`
})

export const logoContainer = style([
    circleBase,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.tertiary.no03
    }
])

export const logoShade = style([
    circleBase,
    {
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: -1,
        backgroundColor: theme.colors.primary.no11
    }
])

export const logoImage = style({
    borderRadius: '999px'
})
