import { style } from '@vanilla-extract/css'

import { sectionBorder, sectionPadding, theme } from '@/style'

export const infoContainer = style([
    sectionPadding,
    sectionBorder,
    {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
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
    height: 'auto',
    position: 'absolute',
    top: '6rem',
    left: 0,
    right: 0,

    '@media': {
        'screen and (min-width: 576px)': {
            top: '8rem'
        }
    }
})

export const cloudsBackground = style({
    width: '100%',
    height: 'auto',
    position: 'absolute',
    left: 0,
    top: '2rem',
    zIndex: 3,
    margin: '0 auto',

    '@media': {
        'screen and (min-width: 896px)': {
            top: '3rem'
        }
    }
})

export const infoSideBase = style({
    display: 'flex',
    flex: '1 1 400px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10rem',
    position: 'relative',

    '@media': {
        'screen and (min-width: 768px)': {}
    }
})

export const infoLeftSide = style([infoSideBase, {}])

export const infoRightSide = style([infoSideBase, {}])

export const heroImage = style({
    width: '100%',
    maxWidth: '36rem',
    height: 'auto',
    position: 'relative'
})
