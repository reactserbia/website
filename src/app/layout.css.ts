import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const content = style({
    maxWidth: theme.dimensions.contentMaxWidth,
    paddingTop: theme.dimensions.headerHeight,
    margin: '0 auto'
})
