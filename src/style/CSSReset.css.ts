import { globalStyle } from '@vanilla-extract/css'

import { theme } from './theme.css'

globalStyle('*', {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
})

globalStyle('body', {
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    padding: '0.5rem 0.5rem 2rem',
    background: theme.colors.tertiary.no02,
    boxShadow:
        '1px 1px 10px 0px #00000045 inset, 0px 0px 60px 0px #8A4D0F8A inset',
    overflowX: 'hidden',

    '@media': {
        'screen and (min-width: 576px)': {
            padding: '1rem 1rem 8rem'
        }
    }
})

globalStyle(':root', {
    fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: 400,
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
    margin: '0 auto'
})
