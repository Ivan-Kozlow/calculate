'use client'
import { FC, Suspense, use, useState } from 'react'

type TypeUser = {
	id: number
	email: string
}

const defaultForm = { email: '', name: '' }

export const FormComp: FC = () => {
	const [users, setUsers] = useState<TypeUser[]>([])
	const [userFormData, setUserFormData] = useState<Partial<typeof defaultForm>>({})

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		if (!userFormData) return
		event.preventDefault()
		setUsers((emails) => [...emails, { id: Date.now(), email: userFormData?.email || '' }])
		setUserFormData({})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='email' />
				<input type='text' name='name' />
				<button type='submit'>Submit</button>
			</form>
			<Suspense fallback={<div>Loading...</div>}>
				<UsersList users={users} />
			</Suspense>
		</div>
	)
}

function UsersList({ users }: { users: TypeUser[] }) {
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					{user.email}
					{/* <button type='button' onClick={() => setUsers(users.filter((u) => u.id !== user.id))}>
							Delete
						</button> */}
				</div>
			))}
		</div>
	)
}
