import { ChangeHandler } from 'react-hook-form'

import { input } from './Input.css'

type InputProps = {
    placeholder: string
    name: string
    onBlur: ChangeHandler
    onChange: ChangeHandler
}

export function Input({ placeholder, name, onBlur, onChange }: InputProps) {
    return (
        <input
            className={input}
            name={name}
            placeholder={placeholder}
            spellCheck={false}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}
