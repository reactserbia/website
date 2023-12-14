import { ReactNode } from 'react'

import { Header } from '@/components'
import { container } from './Page.css'
import { LINK_TYPE } from '@/models'

type PageProps = {
    children: ReactNode
    page: LINK_TYPE
}

export function Page({ children, page }: PageProps) {
    return (
        <main className={container}>
            <Header page={page} />
            {children}
        </main>
    )
}
