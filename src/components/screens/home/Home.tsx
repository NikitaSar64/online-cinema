import React, { FC } from 'react'

import Layout from '@components/layout/Layout'
import { Heading } from '@components/ui/heading/Heading'

import { HomeProps } from './Home.props'

const HomePage: FC<HomeProps> = () => {
	return (
		<Heading
			title="Watch movies online"
			className="text-gray-300 mb-8 text-xl"
		/>
	)
}

export default HomePage
