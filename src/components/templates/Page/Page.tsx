import { ReactNode } from 'react'

import { Footer, Header } from '@/components'
import { LINK_TYPE } from '@/models'

import { container } from './Page.css'

type PageProps = {
    children: ReactNode
    page: LINK_TYPE
}

export function Page({ children, page }: PageProps) {
    return (
        <main className={container}>
            <Header page={page} />
            {children}
            <Footer />
        </main>
    )
}
