import { FieldValues, UseFormRegister } from 'react-hook-form'

import { input } from './Input.css'

type InputProps = {
    placeholder: string
    name: string
    register: UseFormRegister<FieldValues>
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
