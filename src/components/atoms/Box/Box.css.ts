import { style, styleVariants } from '@vanilla-extract/css'

import { SIZE_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'

export const containerBase = style({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: theme.border.small,
    backgroundColor: theme.colors.tertiary.no02,
    textAlign: 'center',
    boxShadow: theme.boxShadow.medium,

    '@media': {
        'screen and (min-width: 576px)': {
            boxShadow: theme.boxShadow.large
        }
    }
})

export const sizeVariants = styleVariants({
    [SIZE_VARIANTS.SMALL]: [
        containerBase,
        {
            maxWidth: '300px'
        }
    ],
    [SIZE_VARIANTS.MEDIUM]: [
        containerBase,
        {
            maxWidth: '450px'
        }
    ],
    [SIZE_VARIANTS.LARGE]: [
        containerBase,
        {
            maxWidth: '800px'
        }
    ]
})
