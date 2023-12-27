import { style } from '@vanilla-extract/css'

import {
    containerBorder,
    ideologyConstriction,
    sectionPadding,
    theme
} from '@/style'

export const container = style([containerBorder, ideologyConstriction])

export const content = style([
    ideologyConstriction,
    sectionPadding,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '4rem',
        position: 'relative',
        backgroundImage: `linear-gradient(180deg, ${theme.colors.primary.no04} 0%, ${theme.colors.secondary.no03} 100%)`,
        overflow: 'hidden'
    }
])

export const clouds = style({
    width: '150%',
    height: 'auto',
    position: 'absolute',
    top: '29rem',
    left: 0,

    '@media': {
        '(min-width: 384px)': {
            width: '100%',
            top: '25rem'
        },

        '(min-width: 448px)': {
            top: '22rem'
        },

        '(min-width: 768px)': {
            top: '20rem'
        }
    }
})

export const graphic = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative'
})

export const yellowHero = style({
    width: '80%',
    height: 'auto',
    position: 'relative',

    '@media': {
        '(min-width: 576px)': {
            width: '100%'
        }
    }
})

export const blueHero = style({
    display: 'none',

    '@media': {
        '(min-width: 448px)': {
            width: '80%',
            display: 'inline-block'
        },

        '(min-width: 576px)': {
            width: '100%'
        }
    }
})

export const bang = style({
    display: 'none',

    '@media': {
        '(min-width: 576px)': {
            width: '70%',
            height: 'auto',
            display: 'block'
        },

        '(min-width: 768px)': {
            width: '100%',
            height: '100%'
        }
    }
})
