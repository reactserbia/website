import { style } from '@vanilla-extract/css'

import { rightConstriction, sectionPadding, theme } from '@/style'

export const billboardContent = style([
    rightConstriction,
    sectionPadding,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
        backgroundImage: `linear-gradient(180deg, ${theme.colors.primary.no04} 0%, ${theme.colors.secondary.no03} 100%)`,
        overflow: 'hidden'
    }
])

export const content = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem'
})
