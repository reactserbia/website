import { style } from '@vanilla-extract/css'

import { sectionBorder, sectionPadding, theme } from '@/style'

export const sectionContainer = style([
    sectionPadding,
    sectionBorder,
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