import type { Metadata } from 'next'
import localFont from 'next/font/local'

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

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <div className={`${komika.className} ${lightTheme}`}>
                {children}
            </div>
        </>
    )
}
