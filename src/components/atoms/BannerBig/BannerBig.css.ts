import { style } from '@vanilla-extract/css'

export const banner = style({
    width: '100%',
    maxWidth: 857,
    height: 'auto',
    display: 'none',

    '@media': {
        'screen and (min-width: 768px)': {
            display: 'block'
        }
    }
})
