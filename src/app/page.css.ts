import { keyframes, style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const bannerContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexDirection: 'column',
    padding: theme.dimensions.sectionPadding,
    border: theme.border,
    background: `linear-gradient(180deg, ${theme.colors.tertiary.no01} 0%, ${theme.colors.tertiary.no03} 100%)`
})

export const infoContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: theme.dimensions.sectionPadding,
    border: theme.border,
    background: `linear-gradient(180deg, ${theme.colors.tertiary.no03} 0%, rgba(105, 217, 193, 0.00) 100%)`
})

export const infoSideBase = style({
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
})

export const infoLeftSide = style([infoSideBase, {}])

export const infoRightSide = style([infoSideBase, {}])

export const billboardContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem',
    padding: theme.dimensions.sectionPadding,
    border: theme.border
})
