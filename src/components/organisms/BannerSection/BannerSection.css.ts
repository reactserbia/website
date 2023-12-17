import { style } from '@vanilla-extract/css'

import { sectionBorder, sectionPadding, theme } from '@/style'

export const bannerContainer = style([
    sectionPadding,
    sectionBorder,
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

export const banner = style({
    width: '100%',
    maxWidth: 857
})

export const linebreak = style({
    '@media': {
        'screen and (min-width: 576px)': {
            display: 'none'
        }
    }
})

export const navigation = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem'
})
