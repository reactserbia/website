import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const header = style({
    height: theme.dimensions.headerHeight,
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    borderBottom: `2px solid ${theme.colors.primary.no12}`,
    boxShadow: `0 6px 0 ${theme.colors.primary.no04}`
})

export const headerContent = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    margin: '0 auto'
})

export const logoContainer = style({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 50%)'
})
