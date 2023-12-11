import { style } from '@vanilla-extract/css'

import { sectionBorder, theme } from '@/style/theme.css'

export const header = style([
    sectionBorder,
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        backgroundColor: theme.colors.tertiary.no02,
        overflow: 'hidden',
        margin: '0 auto'
    }
])

export const navigation = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
})
