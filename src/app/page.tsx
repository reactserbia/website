import { Logo } from '@/components'
import { container, content, banner } from './page.css'

export default function Home() {
    return (
        <main className={container}>
            <div className={banner} />
            <div className={content}>
                <Logo />
            </div>
        </main>
    )
}
