import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    padding: '2rem',
    border: `2px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no05,
    boxShadow: `8px 8px ${theme.colors.tertiary.no12}`
})

export const content = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '2rem',
    border: `2px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: `inset 4px 4px ${theme.colors.tertiary.no08}`
})
