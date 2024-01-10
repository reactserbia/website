import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: '2rem',
    zIndex: 3,
    margin: '0 auto',

    '@media': {
        'screen and (min-width: 896px)': {
            top: '3rem'
        }
    }
})
