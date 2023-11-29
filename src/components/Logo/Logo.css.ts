import { theme } from '@/style/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

const paragraphBase = style({
    position: 'relative',
    lineHeight: 1,
    fontSize: '4rem',
    fontWeight: 900,
    WebkitTextStroke: `2px ${theme.colors.no12textContrastHigh}`,
    margin: 0
})

export const span = style({
    position: 'absolute',
    left: 5,
    top: 5,
    zIndex: -1,
    color: theme.colors.no12textContrastHigh
})

export const paragraph = styleVariants({
    primary: [paragraphBase, { color: theme.colors.no3elementBackground }],
    secondary: [paragraphBase, { color: theme.colors.no6bordersNonInteractive }]
})
