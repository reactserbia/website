import {
    AboutSection,
    BannerSection,
    BillboardSection,
    Page
} from '@/components'
import { LINK_TYPE } from '@/models'

export default function Home() {
    return (
        <Page page={LINK_TYPE.HOME}>
            <BannerSection />
            <AboutSection />
            <BillboardSection />
        </Page>
    )
}
