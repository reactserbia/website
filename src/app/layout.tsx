import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast'

import { lightTheme } from '@/style/theme.css'
import '@/style/CSSReset.css'

type RootLayoutProps = {
    children: React.ReactNode
}

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

export const metadata: Metadata = {
    title: 'React Serbia',
    description: 'Super-Charging React Community',
    icons: {
        icon: '/images/favicon.svg'
    }
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body className={`${komika.className} ${lightTheme}`}>
                {children}
                <Toaster />
            </body>
        </html>
    )
}
