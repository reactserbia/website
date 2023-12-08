import { keyframes, style } from '@vanilla-extract/css'

import { theme } from '@/style/theme.css'

export const content = style({
    width: '100%',
    maxWidth: theme.dimensions.contentMaxWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'center',
    margin: '0 auto'
})

export const bannerContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexDirection: 'column',
    padding: '2rem 0',
    border: theme.border,
    background: `linear-gradient(180deg, ${theme.colors.tertiary.no01} 0%, ${theme.colors.tertiary.no03} 100%)`
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '4rem 0',
    border: theme.border,
    background: `linear-gradient(180deg, ${theme.colors.tertiary.no03} 0%, rgba(105, 217, 193, 0.00) 100%)`
})

export const infoSectionsContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem'
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
    padding: '64px 0',
    borderBottom: `2px solid ${theme.colors.primary.no12}`
})

export const aboutContainer = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '64px 0',
    borderBottom: `2px solid ${theme.colors.primary.no12}`,
    backgroundColor: theme.colors.primary.no07
})
