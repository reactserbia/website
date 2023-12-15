import { style } from '@vanilla-extract/css'

import { sectionBorder, sectionPadding, theme } from '@/style'

export const container = style([
    sectionBorder,
    sectionPadding,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        position: 'relative',
        background: `linear-gradient(180deg, ${theme.colors.secondary.no03} 0%, ${theme.colors.tertiary.no06} 100%)`,
        overflow: 'hidden'
    }
])

export const imagesContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '1rem'
})

export const clouds = style({
    position: 'absolute',
    top: '20rem',
    left: 0
})

export const author = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.5rem'
})

export const navigation = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem'
})
