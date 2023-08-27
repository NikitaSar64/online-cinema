import { TypeMaterialIconName } from './icon.type'

export interface IGenre {
	id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IMovie {
	id: string
	poster: string
	bigPoster: string
	year: number
	duration: number
	country: string
	description: string;
	slug: string
	name: string
	genres: IGenre[]
	actors?: IActor[]
	rating?: number
}

export interface IActor {
	id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}
