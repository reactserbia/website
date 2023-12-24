import { useForm } from 'react-hook-form'

import { Input } from '@/components'

import { container } from './EmailSubscribe.css'

export function EmailSubscribe() {
    return (
        <form className={container}>
            <Input />
        </form>
    )
}
