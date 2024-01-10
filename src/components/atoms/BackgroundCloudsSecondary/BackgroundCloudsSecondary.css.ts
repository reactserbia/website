import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '6rem',
    left: 0,
    right: 0,

    '@media': {
        'screen and (min-width: 576px)': {
            top: '8rem'
        }
    }
})
