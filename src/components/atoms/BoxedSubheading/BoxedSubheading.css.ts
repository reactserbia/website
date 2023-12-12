import { style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const subheading = style({
    padding: '0rem 1.5rem 0.25rem',
    border: `2px solid ${theme.colors.black}`,
    borderRadius: 999,
    lineHeight: 1,
    fontSize: '1rem',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.colors.black,
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: theme.boxShadow.small,

    '@media': {
        'screen and (min-width: 576px)': {
            fontSize: '1.25rem',
            boxShadow: theme.boxShadow.medium
        }
    }
})
