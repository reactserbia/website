import { style } from '@vanilla-extract/css'

import {
    containerBorder,
    ideologyConstriction,
    sectionPadding,
    theme
} from '@/style'

export const container = style([containerBorder, ideologyConstriction])

export const content = style([
    ideologyConstriction,
    sectionPadding,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '4rem',
        backgroundImage: `linear-gradient(180deg, ${theme.colors.primary.no04} 0%, ${theme.colors.secondary.no03} 100%)`,
        overflow: 'hidden'
    }
])

export const graphic = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
})
