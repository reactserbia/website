import {
    AboutSection,
    BannerSection,
    BillboardSection,
    Page
} from '@/components'
import { NAVIGATION_LINK_TYPE } from '@/models'

export default function Home() {
    return (
        <Page page={NAVIGATION_LINK_TYPE.HOME}>
            <BannerSection />
            <AboutSection />
            <BillboardSection />
        </Page>
    )
}
