'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { Button, Input } from '@/components'
import { emailSubscribeSchema } from '@/models'

import { container } from './EmailSubscribe.css'

type EmailSubscriber = z.infer<typeof emailSubscribeSchema>

export function EmailSubscribe() {
    const {
        register,
        handleSubmit,
        formState: { isValid }
    } = useForm({ resolver: zodResolver(emailSubscribeSchema) })

    const onClick = async (data: EmailSubscriber) => {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        const resdata = await response.json()

        if (!response.ok) {
            toast.error(resdata.message)
        } else {
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
                name='firstName'
                register={register}
            />
            <Input
                placeholder='Last Name'
                name='lastName'
                register={register}
            />
            <Input placeholder='Email' name='email' register={register} />
            <Button type='submit' disabled={!isValid} marginTop='1rem'>
                Subscribe to Email
            </Button>
        </form>
    )
}
