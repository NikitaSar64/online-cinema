import { axiosClassic } from 'api/interceptors'

import { IGenre } from '@shared/types/movie.types'

import { getGenresUrl } from '@config/api.config'

export const getGenres = async () => {
	return await axiosClassic.get<IGenre[]>(getGenresUrl())
}
