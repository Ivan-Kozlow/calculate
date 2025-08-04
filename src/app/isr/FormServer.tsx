import { FC, PropsWithChildren, Suspense } from 'react'

import { Input } from './Input'

export const FormServer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='p-8 max-w-md mx-auto'>
			<h1 className='text-2xl font-bold mb-6'>Форма со стримингом</h1>

			<form className='space-y-4'>
				{/* Первый инпут загружается сразу */}
				<div className='space-y-2'>
					<label className='block text-sm font-medium'>Имя</label>
					<input type='text' className='w-full p-2 border rounded' placeholder='Введите ваше имя' />
				</div>

				{/* Второй инпут загружается с задержкой */}
				<Suspense fallback={<div className='h-12 bg-gray-100 rounded animate-pulse'></div>}>
					<Input value='1' placeholder='Телефон' delay={2000} />
				</Suspense>

				{/* Третий инпут с ещё большей задержкой */}
				<Suspense fallback={<div className='h-12 bg-gray-100 rounded animate-pulse'></div>}>
					<Input value='1' placeholder='Телефон' delay={4000} />
				</Suspense>
			</form>
		</div>
	)
}
