import { NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
})

export async function POST(request: NextRequest) {
    const { FIRST_NAME, LAST_NAME, CITY, EMAIL } = await request.json()

    try {
        if (
            FIRST_NAME.trim() &&
            LAST_NAME.trim() &&
            CITY.trim() &&
            EMAIL.trim()
        ) {
            await mailchimp.lists.addListMember(
                process.env.MAILCHIMP_AUDIENCE_ID,
                {
                    email_address: EMAIL,
                    status: 'subscribed',
                    merge_fields: {
                        FIRST_NAME,
                        LAST_NAME,
                        CITY
                    }
                }
            )

            return Response.json(
                { message: 'Successfully subscribed! 🚀' },
                {
                    status: 201
                }
            )
        }

        return Response.json({ message: 'Invalid data!' }, { status: 400 })
    } catch (error) {
        return Response.json({ message: 'Error subscribing!' }, { status: 400 })
    }
}
