'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button, Input } from '@/components'
import { emailSubscribeSchema } from '@/models'

import { container } from './EmailSubscribe.css'

export function EmailSubscribe() {
    const {
        register,
        handleSubmit,
        formState: { isValid }
    } = useForm({ resolver: zodResolver(emailSubscribeSchema) })

    return (
        <form
            className={container}
            onSubmit={handleSubmit(d => console.log(d))}
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
