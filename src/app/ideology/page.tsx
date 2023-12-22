import { BoxedHeading, BoxedParagraph, InfoSection, Page } from '@/components'
import { COLOR_VARIANTS, SHADE_VARIANTS, SIZE_VARIANTS } from '@/constants'
import { NAVIGATION_LINK_TYPE } from '@/models'

import { sectionContainer } from './page.css'

export default function Ideology() {
    return (
        <Page page={NAVIGATION_LINK_TYPE.IDEOLOGY}>
            <section className={sectionContainer}>
                <BoxedHeading
                    colorVariant={COLOR_VARIANTS.TERTIARY}
                    shadeVariant={SHADE_VARIANTS.DARK}
                >
                    IDEOLOGY
                </BoxedHeading>
                <BoxedParagraph>
                    On this page, you will find the ideology behind the
                    organization. This is the place where you should be able to
                    dive into our minds, see how we think, why are we doing
                    things certain way, what are our goals, how we operate, etc.
                    Based on all that, you should be able to draw the conclution
                    about the organization, see if you like the idea and whether
                    you want to be a part of it or not. We hope you do! 🍀
                </BoxedParagraph>
                <InfoSection
                    sizeVariant={SIZE_VARIANTS.LARGE}
                    heading='About Us 💡'
                >
                    React Serbia serves as a unifying platform for passionate
                    React enthusiasts, striving to empower and elevate their
                    expertise. Our mission is to establish React Serbia as the
                    definitive one-stop destination for the React community in
                    Serbia.
                    <br />
                    <br />
                    Our objective is to establish a robust framework for:
                    <br />• community growth
                    <br />• networking opportunities
                    <br />• exchange of knowledge
                    <br />• exchange of ideas
                    <br />• showcasing talent
                    <br />• job search
                    <br />• providing the services for the community.
                    <br />
                    <br />
                    Through this structured approach, we endeavour to create an
                    environment that not only nurtures individual professional
                    development but also contributes significantly to the
                    collective advancement of our community.
                </InfoSection>
                <InfoSection
                    sizeVariant={SIZE_VARIANTS.LARGE}
                    heading='Sponsorship 🎗️'
                >
                    The organization is open for sponsorship. We will use all
                    the resources we get to enable proper functioning and
                    enjoyable experience.
                    <br />
                    <br />
                    Organization can be sponsored with the money, of course, but
                    it can be sponsored with the space for the meetups,
                    advertisement material, services, food or anything necessary
                    or benefitial for the organization.
                    <br />
                    <br />
                    In the return, sponsors should be showcased as the
                    supporters of the community. Ideally, we should repay
                    sometimes for the help we are receiving. In case of
                    companies, the least we can do is to advertise their current
                    open positions and help them find the right man for the job.
                    <br />
                    <br />
                    Anyone applying for a job ad listed in the
                    organization&apos;s page MUST get a response after applying
                    and explanation in case of a rejection. Everyone deserves a
                    proper treatment and candidate&apos;s effort for the mutual
                    benefit should be appreciated! We value good manners!
                </InfoSection>
                <InfoSection
                    sizeVariant={SIZE_VARIANTS.LARGE}
                    heading='Financial Transparency 📊'
                >
                    The organization is financially transparent. People should
                    be able to see the income and outcome lists and see what was
                    done with the money. Everyone should be able to evaluate
                    organization&apos;s work, the way things function and draw a
                    conclustion for themselves whether we are doing a good thing
                    or not.
                    <br />
                    <br />
                    This will be one of the proofs for organization&#39;s
                    legitimacy and whitness about our non-profit nature.
                </InfoSection>
                <InfoSection
                    sizeVariant={SIZE_VARIANTS.LARGE}
                    heading='Meetup Outlines 🗓️'
                >
                    The idea is to meet monthly. The meetups will have a certain
                    structure.
                    <br />
                    <br />
                    We will try to list meetup agenda in advance and meetup
                    summary should be written and posted publicly.
                    <br />
                    <br />
                    The ideas:
                    <br />• atendees should be registered prior to the meetup in
                    order to properly plan the event
                    <br />• we will have talks; those can be of a random topics
                    but later we might have the whole event focused on a certain
                    topic
                    <br />• we will have a panel discussions
                    <br />• we plan to do workshops
                    <br />• we will cover non-tech topics, as well
                    <br />• we will collect the data about atendees and if
                    they&apos;re compliant publish it publicly to show the
                    effort; we can list the people&apos;s socials, GitHub,
                    Twitter, LinkedIn, email, etc.
                    <br />• we will list the people seeking for a job
                    <br />• we are open for sponsorship in order to create
                    quality events
                    <br />• we will list sponsors currently hiring and their
                    open positions
                    <br />• we are planning to have a merch in the future.
                </InfoSection>
            </section>
        </Page>
    )
}
