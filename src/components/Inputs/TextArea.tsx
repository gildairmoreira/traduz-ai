import React from 'react'

type TextAreaProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ id, value, onChange, placeholder }) => (
    <textarea
        rows={5}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='p-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400'
    />
)

export default TextArea