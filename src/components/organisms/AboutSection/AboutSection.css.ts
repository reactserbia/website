import { style } from '@vanilla-extract/css'

import {
    containerBorder,
    leftConstriction,
    sectionPadding,
    theme
} from '@/style'

export const container = style([containerBorder, leftConstriction])

export const content = style([
    leftConstriction,
    sectionPadding,
    {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        gap: '2rem',
        position: 'relative',
        background: `linear-gradient(180deg, ${theme.colors.tertiary.no03} 0%, ${theme.colors.primary.no04} 100%)`,
        overflow: 'hidden'
    }
])

export const infoSideBase = style({
    display: 'flex',
    flex: '1 1 400px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10rem',
    position: 'relative',

    '@media': {
        'screen and (min-width: 768px)': {}
    }
})

export const infoLeftSide = style([infoSideBase, {}])

export const infoRightSide = style([infoSideBase, {}])
