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
    backgroundColor: theme.colors.tertiary.no02,
    backgroundImage: `linear-gradient(180deg, ${theme.colors.tertiary.no01} calc(100% - 1px), ${theme.colors.tertiary.no05} 0)`,
    backgroundSize: `100% calc((100% - 1 * 1px) / 50 + 1px)`
})

export const infoContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '64px 0',
    backgroundColor: theme.colors.primary.no07
})
