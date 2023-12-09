import { theme } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
    width: '100%',
    maxWidth: '450px',
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

export const heading = style({
    lineHeight: 1,
    fontSize: '2rem',
    margin: 0
})

export const paragraph = style({})
