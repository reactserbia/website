import { style } from '@vanilla-extract/css'

import {
    containerBorder,
    footerConstriction,
    sectionPadding,
    theme
} from '@/style'
import { flexCenter } from '@/style/utils'

export const container = style([containerBorder, footerConstriction])

export const content = style([
    footerConstriction,
    sectionPadding,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '4rem',
        position: 'relative',
        background: `linear-gradient(180deg, ${theme.colors.secondary.no03} 0%, ${theme.colors.tertiary.no03} 100%)`,
        overflow: 'hidden'
    }
])

export const clouds = style({
    width: '150%',
    height: 'auto',
    position: 'absolute',
    top: '32rem',
    left: 0,

    '@media': {
        '(min-width: 384px)': {
            width: '100%',
            top: '28rem'
        },

        '(min-width: 448px)': {
            top: '25rem'
        },

        '(min-width: 768px)': {
            top: '22rem'
        }
    }
})

export const imagesContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '1rem'
})

export const bangImage = style({
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

export const heroImage = style({
    width: '80%',
    height: 'auto',
    position: 'relative',

    '@media': {
        '(min-width: 576px)': {
            width: '100%'
        }
    }
})

export const connectSection = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '4rem',

    '@media': {
        '(min-width: 768px)': {
            flexDirection: 'row'
        }
    }
})

export const connectContent = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem'
})

export const socialNetworks = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem'
})

export const logoContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
})

export const author = style({
    ...flexCenter,
    flexDirection: 'column',
    gap: '0.5rem'
})

export const navigation = style({
    ...flexCenter,
    gap: '0.5rem'
})
