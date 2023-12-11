import { style } from '@vanilla-extract/css'

import { sectionBorder, theme } from '@/style'

export const billboardContainer = style([
    sectionBorder,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        padding: theme.dimensions.sectionPadding,
        backgroundImage: `linear-gradient(180deg, ${theme.colors.tertiary.no01} 0%, ${theme.colors.tertiary.no04} 100%)`,
        overflow: 'hidden'
    }
])

export const billboardContent = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem'
})
