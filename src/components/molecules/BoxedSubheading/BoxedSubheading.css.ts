import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    padding: '0.25rem 1rem',
    border: '1px solid black',
    borderRadius: 999,
    backgroundColor: theme.colors.tertiary.no02
})
