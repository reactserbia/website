import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    paddingTop: `calc(${theme.dimensions.headerHeight} + 40px)`
})

export const content = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    textAlign: 'center',
    margin: '0 auto'
})

export const bannerContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
})
