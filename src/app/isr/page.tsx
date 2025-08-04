import { FC, use } from 'react'

import { showLog } from './severFile'
import { Input } from './Input'
import { FormServer } from './FormServer'
import { ClientComponent } from './ClientComponent'

import type { TypePost } from '../page'
const fetchData = async () => {
	'use server'
	return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 5 } }).then(
		async (res) => {
			return { data: await res.json() }
		}
	)
}

async function getInput(value: 1 | 2): Promise<1 | 2> {
	return await new Promise((resolve, reject) => setTimeout(reject, value === 1 ? 0 : 12_000))
}

const Revalidate: FC = () => {
	// const { data: d } = use<{ data: TypePost[]; cc: number }>(fetchData())
	let i1 = -1
	try {
		i1 = use(getInput(1))
	} catch (error) {
		i1 = -2
	}

	return (
		<div>
			<h1>
				Revalidate
				<div>
					1111
					<ClientComponent fn={showLog} />
				</div>
				<div>
					<FormServer />
				</div>
			</h1>
		</div>
	)
}

export default Revalidate
