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
    background: theme.colors.no1appBackground,
    overflowX: 'hidden'
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
