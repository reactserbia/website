import '@/style/CSSReset.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const komika = localFont({
    src: [
        {
            path: '../assets/fonts/KomikaHand.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../assets/fonts/KomikaHandBold.ttf',
            weight: '700',
            style: 'normal'
        }
    ]
})

import { lightTheme } from '@/style/theme.css'

export const metadata: Metadata = {
    title: 'React Serbia',
    description: 'Super-Charging React Community',
    icons: {
        icon: '/images/favicon.svg'
    }
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={`${komika.className} ${lightTheme}`}>
                {children}
            </body>
        </html>
    )
}
