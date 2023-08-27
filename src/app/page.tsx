'use client'

import { MainProvider } from 'providers/MainProvider'

import HomePage from '@components/screens/home/Home'

const Home = () => {
	return (
		<MainProvider>
			<HomePage />
		</MainProvider>
	)
}

export default Home
