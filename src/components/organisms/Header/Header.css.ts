import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const header = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    border: `2px solid ${theme.colors.black}`,
    backgroundColor: theme.colors.tertiary.no02,
    margin: '0 auto'
})
