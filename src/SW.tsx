'use client'

import { useEffect } from 'react'

export const RegisterSW = function () {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			console.log('load SW')
			navigator.serviceWorker
				.register('/sw.js')
				.then((registration) => {
					console.log('SW registered: ', registration)
				})
				.catch((registrationError) => {
					console.log('SW registration failed: ', registrationError)
				})
		}
	}, [])

	return null
}
