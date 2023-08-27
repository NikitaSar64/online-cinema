import { useQuery } from 'react-query'

import { MenuItemProps } from '@components/layout/navigation/menuContainer/components/menuItem/MenuItem.props'

import { getGenres } from '@services/genre.service'

export const usePopularGenres = () => {
	const queryData = useQuery('genre menu', getGenres, {
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: genre.slug,
							title: genre.name,
						}) as MenuItemProps
				)
				.splice(0, 4),
	})

	return queryData
}
