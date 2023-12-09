import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    maxWidth: '450px',
    padding: '1.5rem',
    border: theme.border
})
