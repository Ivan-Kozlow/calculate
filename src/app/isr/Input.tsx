import type { FC } from 'react'

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const Input: FC<{ placeholder: string; value: string; delay: number }> = async ({
	placeholder,
	value,
	delay,
}) => {
	await sleep(delay)

	return (
		<div className='space-y-2'>
			<label className='block text-sm font-medium'>{delay === 2000 ? 'Email' : 'Телефон'}</label>
			<input
				type={delay === 2000 ? 'email' : 'tel'}
				className='w-full p-2 border rounded'
				placeholder={placeholder}
			/>
		</div>
	)
}
