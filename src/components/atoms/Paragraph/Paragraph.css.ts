import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const paragraph = style({
    lineHeight: 1.5,
    fontSize: '0.75rem',
    color: theme.colors.black,

    '@media': {
        'screen and (min-width: 576px)': {
            fontSize: '1rem'
        }
    }
})
