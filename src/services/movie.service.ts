import { getMovieUrl } from "@config/url.config"
import { IMovie } from "@shared/types/movie.types"
import { axiosClassic } from "api/interceptors"

export const getMovies = async (slug: string) => {
	return await axiosClassic.get<IMovie[]>(getMovieUrl(slug))
}