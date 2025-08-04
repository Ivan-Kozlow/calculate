'use client'

import { ComponentPropsWithRef, FC, useEffect, useOptimistic, useRef, useState } from 'react'

type TypeOrder = { orderName: string; preparing: boolean }

export function Kitchen() {
	const formRef = useRef<HTMLFormElement>(null)
	const ff = useRef<HTMLInputElement>(null)
	const [orders, setOrders] = useState<TypeOrder[]>([])
	const [optimisticOrders, addOptimisticOrder] = useOptimistic<TypeOrder[]>(orders)

	useEffect(() => {
		ff.current?.focus()
	}, [])

	async function onMakeOrder(orderName: string) {
		await new Promise((res, rej) => setTimeout(rej, 2000))
		setOrders((orders) => [...orders, { orderName, preparing: false }])
	}

	async function formAction(formData: FormData) {
		const orderName = formData.get('orderName')?.toString() || ''
		addOptimisticOrder((prev) => [...prev, { orderName, preparing: true }])
		formRef?.current && formRef.current.reset()
		try {
			await onMakeOrder(orderName)
		} catch (error) {
			addOptimisticOrder(orders)
		}
	}

	return (
		<div>
			<form action={formAction} ref={formRef}>
				<input type='text' name='orderName' placeholder='Введите заказ!' />
				<button type='submit'>Заказать</button>
			</form>

			<Test ref={ff} />

			{optimisticOrders.map((order, index) => (
				<div key={index}>
					{order.orderName}
					{order.preparing ? <span> (Готовиться...)</span> : <span> (Готов!)</span>}
				</div>
			))}
		</div>
	)
}

const Test: FC<ComponentPropsWithRef<'input'>> = ({ ref }) => {
	return <input ref={ref} />
}
