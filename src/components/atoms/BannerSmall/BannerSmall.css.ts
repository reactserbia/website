import { style } from '@vanilla-extract/css'

export const banner = style({
    width: '100%',
    maxWidth: 857,
    display: 'block',

    '@media': {
        'screen and (min-width: 768px)': {
            display: 'none'
        }
    }
})
