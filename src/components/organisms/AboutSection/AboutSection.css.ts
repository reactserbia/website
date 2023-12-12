import { sectionBorder, sectionPadding, theme } from '@/style'

import { style } from '@vanilla-extract/css'

export const infoContainer = style([
    sectionPadding,
    sectionBorder,
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden',

        '@media': {
            'screen and (min-width: 576px)': {
                background: `linear-gradient(180deg, ${theme.colors.tertiary.no03} 0%, rgba(105, 217, 193, 0.00) 100%)`
            }
        }
    }
])

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    flexDirection: 'column',
    position: 'relative'
})

export const infoLeftSide = style([infoSideBase, {}])

export const infoRightSide = style([infoSideBase, {}])

export const heroImage = style({
    width: '100%',
    height: 'auto',

    '@media': {
        'screen and (min-width: 576px)': {
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)'
        }
    }
})
