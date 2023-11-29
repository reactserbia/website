import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    paddingTop: theme.dimensions.headerHeight
})

export const content = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    textAlign: 'center',
    margin: '0 auto'
})

export const banner = style({
    width: '100%',
    height: '300px',
    backgroundImage: 'url(/images/clouds.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
})
