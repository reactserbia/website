import { style, styleVariants } from '@vanilla-extract/css'

import { SIZE_VARIANTS } from '@/constants'
import { theme } from '@/style/theme.css'

const paragraphBase = style({
    lineHeight: 1.5,
    fontSize: '0.875rem',
    color: theme.colors.black,

    '@media': {
        'screen and (min-width: 576px)': {
            fontSize: '1rem'
        }
    }
})

export const paragraphSizes = styleVariants({
    [SIZE_VARIANTS.SMALL]: [
        paragraphBase,
        {
            fontSize: '0.625rem',

            '@media': {
                'screen and (min-width: 576px)': {
                    fontSize: '0.75rem'
                }
            }
        }
    ],
    [SIZE_VARIANTS.MEDIUM]: [
        paragraphBase,
        {
            fontSize: '0.75rem',

            '@media': {
                'screen and (min-width: 576px)': {
                    fontSize: '0.875rem'
                }
            }
        }
    ],
    [SIZE_VARIANTS.LARGE]: [
        paragraphBase,
        {
            fontSize: '0.875rem',

            '@media': {
                'screen and (min-width: 576px)': {
                    fontSize: '1rem'
                }
            }
        }
    ]
})
