import { style } from '@vanilla-extract/css'

import { sectionBorder, sectionPadding } from '@/style'

export const container = style([
    sectionBorder,
    sectionPadding,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem'
    }
])
