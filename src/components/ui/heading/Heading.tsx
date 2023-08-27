import React, { FC } from 'react'

import { HedingProps } from './Heading.props'

export const Heading: FC<HedingProps> = ({ className, title }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}
