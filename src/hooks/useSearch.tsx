import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from './useDebounce'
import { getMovies } from '@services/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounedSearch = useDebounce(searchTerm, 500)

	const {isSuccess, data} = useQuery(['search movie list', debounedSearch], () => getMovies(debounedSearch), {
		select: ({data}) => data,
		enabled: !!debounedSearch
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	}

	return {isSuccess, handleSearch, data, searchTerm}
}
