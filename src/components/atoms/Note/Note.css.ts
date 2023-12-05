import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    padding: '2rem',
    border: `1px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no01,
    boxShadow: `4px 4px ${theme.colors.tertiary.no12}`
})
