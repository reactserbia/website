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
            <Input {...register('firstName')} placeholder='First Name' />
            <Input {...register('lastName')} placeholder='Last Name' />
            <Input {...register('email')} placeholder='Email' />
            <button type='submit' disabled={!isValid}>
                Subscribe to Email
            </button>
        </form>
    )
}
