import { theme } from '@/style'

import { style } from '@vanilla-extract/css'

export const infoContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    position: 'relative',
    padding: theme.dimensions.sectionPadding,
    border: theme.border,
    background: `linear-gradient(180deg, ${theme.colors.tertiary.no03} 0%, rgba(105, 217, 193, 0.00) 100%)`
})

export const distantCloudsBackground = style({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
})

export const cloudsBackground = style({
    position: 'absolute',
    left: -90,
    top: 110,
    zIndex: 3
})

export const infoSideBase = style({
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative'
})

export const infoLeftSide = style([infoSideBase, {}])

export const infoRightSide = style([infoSideBase, {}])

export const heroImage = style({
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
})