import { style } from '@vanilla-extract/css'

import {
    containerBorder,
    rightConstriction,
    sectionPadding,
    theme
} from '@/style'

export const container = style([containerBorder, rightConstriction])

export const content = style([
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

export const billboardContent = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem'
})
