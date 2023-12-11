import { style } from '@vanilla-extract/css'

import { sectionBorder, theme } from '@/style'

export const bannerContainer = style([
    sectionBorder,
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        flexDirection: 'column',
        padding: theme.dimensions.sectionPadding,
        background: `linear-gradient(180deg, ${theme.colors.tertiary.no01} 0%, ${theme.colors.tertiary.no03} 100%)`
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
