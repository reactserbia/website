import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { cyan } from '@radix-ui/colors'

const spacingUnit = '4px'
const contentMaxWidth = '672px'
const headerHeight = '64px'

export const theme = createThemeContract({
    dimensions: {
        spacingUnit: null,
        contentMaxWidth: null,
        headerHeight: null
    },
    colors: {
        no1appBackground: null,
        no2subtleBackground: null,

        no3elementBackground: null,
        no4elementBackgroundHovered: null,
        no5elementBackgroundActive: null,

        no6bordersNonInteractive: null,
        no7bordersInteractive: null,
        no8bordersInteractiveFocused: null,

        no9solidBackground: null,
        no10solidBackgroundHovered: null,

        no11textContrastLow: null,
        no12textContrastHigh: null
    }
})

export const lightTheme = createTheme(theme, {
    dimensions: {
        spacingUnit,
        contentMaxWidth,
        headerHeight
    },
    colors: {
        no1appBackground: cyan.cyan1,
        no2subtleBackground: cyan.cyan2,

        no3elementBackground: cyan.cyan3,
        no4elementBackgroundHovered: cyan.cyan4,
        no5elementBackgroundActive: cyan.cyan5,

        no6bordersNonInteractive: cyan.cyan6,
        no7bordersInteractive: cyan.cyan7,
        no8bordersInteractiveFocused: cyan.cyan8,

        no9solidBackground: cyan.cyan9,
        no10solidBackgroundHovered: cyan.cyan10,

        no11textContrastLow: cyan.cyan11,
        no12textContrastHigh: cyan.cyan12
    }
})
