import { keyframes, style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const container = style({
    paddingTop: theme.dimensions.headerHeight
})

export const content = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    textAlign: 'center',
    margin: '0 auto'
})

export const bannerContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    padding: '64px 0',
    borderBottom: `2px solid ${theme.colors.tertiary.no12}`,
    backgroundColor: theme.colors.tertiary.no02,
    backgroundImage: `linear-gradient(180deg, ${theme.colors.tertiary.no01} calc(100% - 1px), ${theme.colors.tertiary.no05} 0)`,
    backgroundSize: `100% calc((100% - 1 * 1px) / 50 + 1px)`
})

export const midSectionLogoContainer = style({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 50%)'
})

export const infoContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '64px 0',
    borderBottom: `2px solid ${theme.colors.primary.no12}`,
    backgroundColor: theme.colors.primary.no07
})

export const infoSectionsContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    marginTop: '4rem'
})

const moving = keyframes({
    from: {
        left: -500
    },
    to: {
        left: '100vw'
    }
})

export const cloud = style({
    position: 'absolute',
    top: '120px',
    zIndex: 0,
    animation: `${moving} 50s linear infinite`
})

export const billboardContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem',
    padding: '64px 0'
})
