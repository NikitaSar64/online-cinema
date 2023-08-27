import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { IMovie } from '@shared/types/movie.types'

import styles from './SearchList.module.scss'
import { getMovieUrl } from '@config/url.config'

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie.id} href={getMovieUrl(movie.slug)}>
						<Image
							src={movie.poster}
							width={50}
							height={50}
							alt={movie.name}
							draggable={false}
						/>
						<span>{movie.name}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found</div>
			)}
		</div>
	)
}
