import { keyframes, style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const billboardContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem',
    padding: theme.dimensions.sectionPadding,
    border: theme.border,
    backgroundImage: `linear-gradient(180deg, ${theme.colors.tertiary.no01} 0%, ${theme.colors.tertiary.no04} 100%)`
})
