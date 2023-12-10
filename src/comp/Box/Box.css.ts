import { style, styleVariants } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'
import { SIZE_VARIANTS } from '@/constants'

export const containerBase = style({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: theme.border,
    backgroundColor: theme.colors.tertiary.no02,
    boxShadow: theme.boxShadow.large,
    textAlign: 'center'
})

export const sizeVariants = styleVariants({
    [SIZE_VARIANTS.SMALL]: [
        containerBase,
        {
            maxWidth: '450px'
        }
    ],
    [SIZE_VARIANTS.MEDIUM]: [
        containerBase,
        {
            maxWidth: '640px'
        }
    ],
    [SIZE_VARIANTS.LARGE]: [
        containerBase,
        {
            maxWidth: '800px'
        }
    ]
})
