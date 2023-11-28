import '@/style/CSSReset.css'

import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import { content } from './layout.css'

const rubik = Rubik({ subsets: ['latin'] })

import { lightTheme } from '@/style/theme.css'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={`${rubik.className} ${lightTheme}`}>
                <div className={content}>{children}</div>
            </body>
        </html>
    )
}
