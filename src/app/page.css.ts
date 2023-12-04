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

export const bannerContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '64px 0',
    borderBottom: `2px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no02
})
