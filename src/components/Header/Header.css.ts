import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const header = style({
    height: theme.dimensions.headerHeight,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    borderBottom: `1px solid ${theme.colors.no12textContrastHigh}`,
    boxShadow: `0 4px 0 ${theme.colors.no4elementBackgroundHovered}`,
    backgroundColor: theme.colors.no2subtleBackground
})
