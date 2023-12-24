import { style } from '@vanilla-extract/css'

import {
    bannerConstriction,
    containerBorder,
    sectionPadding,
    theme
} from '@/style'
import { flexCenter } from '@/style/utils'

export const bannerContainer = style([containerBorder, bannerConstriction])

export const bannerContent = style([
    bannerConstriction,
    sectionPadding,
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        flexDirection: 'column',
        background: `linear-gradient(180deg, ${theme.colors.primary.no03} 0%, ${theme.colors.tertiary.no03} 100%)`
    }
])

export const bannerBig = style({
    width: '100%',
    maxWidth: 857,
    height: 'auto',
    display: 'none',

    '@media': {
        'screen and (min-width: 768px)': {
            display: 'block'
        }
    }
})

export const banner = style({
    width: '100%',
    maxWidth: 857,
    display: 'block',

    '@media': {
        'screen and (min-width: 768px)': {
            display: 'none'
        }
    }
})

export const space = style({
    display: 'none',

    '@media': {
        'screen and (min-width: 576px)': {
            display: 'inline'
        }
    }
})

export const linebreak = style({
    '@media': {
        'screen and (min-width: 576px)': {
            display: 'none'
        }
    }
})

export const navigation = style({
    ...flexCenter,
    gap: '0.5rem'
})
