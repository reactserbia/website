import { style } from '@vanilla-extract/css'

export const container = style({
    width: '150%',
    height: 'auto',
    position: 'absolute',
    top: '32rem',
    left: 0,

    '@media': {
        '(min-width: 384px)': {
            width: '100%',
            top: '28rem'
        },

        '(min-width: 448px)': {
            top: '25rem'
        },

        '(min-width: 768px)': {
            top: '22rem'
        }
    }
})
