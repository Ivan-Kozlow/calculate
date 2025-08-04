'use client'

import { FC, use, useCallback, useMemo, useReducer, useState } from 'react'

import { sc } from './ClientComponent'

import type { TypePost } from '../page'
const f = fetch('https://jsonplaceholder.typicode.com/posts').then(async (res) => res.json())
let startT = false
export const Test: FC<{ fn: () => void }> = ({ fn }) => {
	console.log(0)
	const data = use(sc)
	console.log(data)
	console.log(11)

	const [ff, setFf] = useState(false)
	console.log(1)
	let d: TypePost[] = []
	!startT &&
		setTimeout(() => {
			console.log('START TIMEOUT')
			startT = true
			try {
				console.log('TRY')
				d = use<TypePost[]>(f)
			} catch (error) {
				console.log('ERROR', error)
			}
			console.log('d', d?.slice(0, 5))
		}, 2_000)
	console.log(2)

	// return (
	// 	<>
	// 		<button
	// 			onClick={() => {
	// 				console.log(11)
	// 				fn()
	// 			}}
	// 		>
	// 			show log
	// 		</button>
	// 		<div>Loading...</div>
	// 	</>
	// )
	return (
		<div>
			<button onClick={() => setFf(!ff)}>{ff ? 'hide' : 'show'}</button>
			{d?.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
				</div>
			))}
		</div>
	)
}
