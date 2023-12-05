import { style } from '@vanilla-extract/css'

export const container = style({
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem'
})
