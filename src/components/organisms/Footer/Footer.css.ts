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
        background: `linear-gradient(180deg, ${theme.colors.secondary.no03} 0%, ${theme.colors.tertiary.no06} 100%)`
    }
])

export const imagesContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '1rem'
})
