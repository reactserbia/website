import { NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
})

export async function POST(request: NextRequest) {
    const { firstName, lastName, email } = await request.json()

    try {
        if (firstName.trim() && lastName.trim() && email.trim()) {
            await mailchimp.lists.addListMember(
                process.env.MAILCHIMP_AUDIENCE_ID,
                {
                    email_address: email,
                    status: 'subscribed',
                    merge_fields: {
                        FIRST_NAME: firstName,
                        LAST_NAME: lastName
                        // CITY: 'Sid'
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
