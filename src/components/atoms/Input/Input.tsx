import { UseFormRegister } from 'react-hook-form'

import { EmailSubscriber } from '@/models'

import { input } from './Input.css'

type InputProps = {
    placeholder: string
    name: 'FIRST_NAME' | 'LAST_NAME' | 'CITY' | 'EMAIL'
    register: UseFormRegister<EmailSubscriber>
}

export function Input({ placeholder, name, register }: InputProps) {
    return (
        <input
            className={input}
            placeholder={placeholder}
            spellCheck={false}
            {...register(name)}
        />
    )
}
