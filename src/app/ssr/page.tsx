import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Test = dynamic(() => import('./Test').then((e) => e.Test))

const Ssr = () => {
	return (
		<div>
			Ssr
			<Suspense fallback={<div>WAIT1...</div>}>
				<Test />
			</Suspense>
		</div>
	)
}

export default Ssr
