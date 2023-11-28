import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const content = style({
    maxWidth: theme.dimensions.contentMaxWidth,
    margin: '0 auto'
})
