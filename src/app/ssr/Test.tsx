import { use } from 'react'

import type { TypePost } from '../page'

export const Test = () => {
	console.log(1)
	const d = use<TypePost[]>(
		fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' }).then((res) => res.json())
	)
	console.log(2)
	return (
		<div>
			{d.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
				</div>
			))}
		</div>
	)
}
