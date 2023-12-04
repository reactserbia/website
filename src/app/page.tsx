import { Heading } from '@/components/atoms'

import { container, content, banner } from './page.css'
import { COLOR_VARIANTS } from '@/constants'

export default function Home() {
    return (
        <main className={container}>
            <div className={content}>
                <Heading>WHO ARE WE?</Heading>
                <hr />
                <Heading variant={COLOR_VARIANTS.SECONDARY}>
                    WHO ARE WE?
                </Heading>
                <hr />
                <Heading variant={COLOR_VARIANTS.TERTIARY}>WHO ARE WE?</Heading>
                <hr />
            </div>
        </main>
    )
}
