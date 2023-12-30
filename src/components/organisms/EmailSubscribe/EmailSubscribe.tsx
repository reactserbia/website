'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button, Input } from '@/components'
import { EmailSubscriber, emailSubscribeSchema } from '@/models'
import { formatText } from '@/utils'

import { container } from './EmailSubscribe.css'

const defaultValues = {
    FIRST_NAME: '',
    LAST_NAME: '',
    CITY: '',
    EMAIL: ''
}

export function EmailSubscribe() {
    const {
        register,
        handleSubmit,
        formState: { isValid },
        reset
    } = useForm({
        defaultValues,
        resolver: zodResolver(emailSubscribeSchema)
    })

    const onClick = async ({
        FIRST_NAME,
        LAST_NAME,
        CITY,
        EMAIL
    }: EmailSubscriber) => {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                FIRST_NAME: formatText(FIRST_NAME.trim()),
                LAST_NAME: formatText(LAST_NAME.trim()),
                CITY: formatText(CITY.trim()),
                EMAIL: EMAIL.trim().toLowerCase()
            })
        })

        const resdata = await response.json()

        if (!response.ok) {
            toast.error(resdata.message)
        } else {
            reset(defaultValues)
            toast.success(resdata.message)
        }
    }

    return (
        <form
            className={container}
            onSubmit={handleSubmit(data => onClick(data as EmailSubscriber))}
        >
            <Input
                placeholder='First Name'
                name='FIRST_NAME'
                register={register}
            />
            <Input
                placeholder='Last Name'
                name='LAST_NAME'
                register={register}
            />
            <Input placeholder='City' name='CITY' register={register} />
            <Input placeholder='Email' name='EMAIL' register={register} />
            <Button type='submit' disabled={!isValid} marginTop='1rem'>
                Subscribe to Email
            </Button>
        </form>
    )
}
