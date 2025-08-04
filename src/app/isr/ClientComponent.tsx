'use client'

import { FC, Suspense, createContext } from 'react'
import dynamic from 'next/dynamic'

const Test = dynamic(() => import('./Test').then((e) => e.Test), { ssr: false })

export const sc = createContext(123)
export const ClientComponent: FC<{ fn: () => Promise<void> }> = ({ fn }) => {
	return (
		<div>
			ddd
			<Suspense fallback={<div>WAIT...</div>}>
				<Test fn={fn} />
			</Suspense>
		</div>
	)
}
