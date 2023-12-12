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
        gap: '2rem',
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
    width: '100%',
    position: 'absolute',
    left: 0,
    top: theme.dimensions.sectionVerticalPadding,
    right: 0,

    '@media': {
        'screen and (min-width: 576px)': {
            top: '8rem'
        }
    }
})

export const cloudsBackground = style({
    width: '100%',
    position: 'absolute',
    left: 0,
    top: `calc(${theme.dimensions.sectionVerticalPadding} - 0.5rem)`,
    zIndex: 3,

    '@media': {
        'screen and (min-width: 576px)': {
            left: -90
        }
    }
})

export const infoSideBase = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10rem',
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
