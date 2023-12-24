'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { emailSubscribeSchema } from '@/models'

import { container, input } from './EmailSubscribe.css'

export function EmailSubscribe() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(emailSubscribeSchema) })

    return (
        <form className={container}>
            <input
                className={input}
                {...register('firstName')}
                placeholder='First Name'
            />
            <input
                className={input}
                {...register('lastName')}
                placeholder='Last Name'
            />
            <input
                className={input}
                {...register('email')}
                placeholder='Email'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
