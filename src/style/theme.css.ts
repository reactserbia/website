import { createTheme, createThemeContract, style } from '@vanilla-extract/css'

import { mint, sky, yellow } from '@radix-ui/colors'

const spacingUnit = '4px'
const contentMaxWidth = '1024px'
const headerHeight = '64px'
const black = '#000'

export const theme = createThemeContract({
    dimensions: {
        spacingUnit: null,
        contentMaxWidth: null,
        headerHeight: null
    },
    border: {
        small: null,
        large: null
    },
    boxShadow: {
        small: null,
        medium: null,
        large: null
    },
    colors: {
        black: null,
        primary: {
            no01: null,
            no02: null,
            no03: null,
            no04: null,
            no05: null,
            no06: null,
            no07: null,
            no08: null,
            no09: null,
            no10: null,
            no11: null,
            no12: null
        },
        secondary: {
            no01: null,
            no02: null,
            no03: null,
            no04: null,
            no05: null,
            no06: null,
            no07: null,
            no08: null,
            no09: null,
            no10: null,
            no11: null,
            no12: null
        },
        tertiary: {
            no01: null,
            no02: null,
            no03: null,
            no04: null,
            no05: null,
            no06: null,
            no07: null,
            no08: null,
            no09: null,
            no10: null,
            no11: null,
            no12: null
        }
    }
})

export const lightTheme = createTheme(theme, {
    dimensions: {
        spacingUnit,
        contentMaxWidth,
        headerHeight
    },
    border: {
        small: `2px solid ${black}`,
        large: `3px solid ${black}`
    },
    boxShadow: {
        small: `3px 3px ${black}`,
        medium: `4px 4px ${black}`,
        large: `6px 6px ${black}`
    },
    colors: {
        black,
        primary: {
            no01: mint.mint1,
            no02: mint.mint2,
            no03: mint.mint3,
            no04: mint.mint4,
            no05: mint.mint5,
            no06: mint.mint6,
            no07: mint.mint7,
            no08: mint.mint8,
            no09: mint.mint9,
            no10: mint.mint10,
            no11: mint.mint11,
            no12: mint.mint12
        },
        secondary: {
            no01: sky.sky1,
            no02: sky.sky2,
            no03: sky.sky3,
            no04: sky.sky4,
            no05: sky.sky5,
            no06: sky.sky6,
            no07: sky.sky7,
            no08: sky.sky8,
            no09: sky.sky9,
            no10: sky.sky10,
            no11: sky.sky11,
            no12: sky.sky12
        },
        tertiary: {
            no01: yellow.yellow1,
            no02: yellow.yellow2,
            no03: yellow.yellow3,
            no04: yellow.yellow4,
            no05: yellow.yellow5,
            no06: yellow.yellow6,
            no07: yellow.yellow7,
            no08: yellow.yellow8,
            no09: yellow.yellow9,
            no10: yellow.yellow10,
            no11: yellow.yellow11,
            no12: yellow.yellow12
        }
    }
})

export const sectionBorder = style({
    border: theme.border.small,

    '@media': {
        'screen and (min-width: 576px)': {
            border: theme.border.large
        }
    }
})

export const sectionPadding = style({
    padding: '2rem 1rem',

    '@media': {
        'screen and (min-width: 576px)': {
            padding: '4rem 1.5rem'
        }
    }
})
