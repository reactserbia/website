import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    display: 'inline-block',
    padding: '0.5rem 2rem',
    border: `1px solid ${theme.colors.no12textContrastHigh}`,
    borderRadius: '4rem',
    boxShadow: `8px 8px 0 ${theme.colors.no4elementBackgroundHovered}`
})
