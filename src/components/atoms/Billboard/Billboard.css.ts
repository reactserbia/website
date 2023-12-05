import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    padding: '2rem',
    border: `2px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no05,
    boxShadow: `6px 6px ${theme.colors.tertiary.no12}`
})

export const content = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
    border: `2px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: `inset 4px 4px ${theme.colors.tertiary.no08}`
})
