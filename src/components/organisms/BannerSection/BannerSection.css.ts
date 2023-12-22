import { style } from '@vanilla-extract/css'

import { sectionPadding, theme } from '@/style'

export const bannerContainer = style({
    padding: 3,
    backgroundColor: theme.colors.black,
    clipPath: 'polygon(0 0, 100% 0,100% calc(100% - 20px), 0 100%)'
})

export const bannerContent = style([
    sectionPadding,
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        flexDirection: 'column',
        background: `linear-gradient(180deg, ${theme.colors.primary.no03} 0%, ${theme.colors.tertiary.no03} 100%)`,
        clipPath: 'polygon(0 0, 100% 0,100% calc(100% - 20px), 0 100%)'
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
