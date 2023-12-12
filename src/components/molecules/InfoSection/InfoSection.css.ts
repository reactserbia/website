import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const headingStyles = style({
    lineHeight: 1,
    fontSize: '1.5rem',
    fontWeight: 700,
    color: theme.colors.black,
    margin: 0,

    '@media': {
        'screen and (min-width: 576px)': {
            fontSize: '2rem'
        }
    }
})
