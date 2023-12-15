import { style } from '@vanilla-extract/css'

import { sectionBorder, sectionPadding, theme } from '@/style'

export const billboardContainer = style([
    sectionPadding,
    sectionBorder,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        overflow: 'hidden',

        '@media': {
            'screen and (min-width: 576px)': {
                backgroundImage: `linear-gradient(180deg, ${theme.colors.tertiary.no02} 0%, ${theme.colors.secondary.no03} 100%)`
            }
        }
    }
])

export const billboardContent = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem'
})
