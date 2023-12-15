import { style } from '@vanilla-extract/css'

import { sectionBorder } from '@/style'

export const container = style([
    sectionBorder,
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem'
    }
])
