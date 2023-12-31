import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
})
