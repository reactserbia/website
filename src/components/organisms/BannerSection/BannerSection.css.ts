import { style } from '@vanilla-extract/css'

import { theme } from '@/style'

export const bannerContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexDirection: 'column',
    padding: theme.dimensions.sectionPadding,
    border: theme.border,
    background: `linear-gradient(180deg, ${theme.colors.tertiary.no01} 0%, ${theme.colors.tertiary.no03} 100%)`
})
