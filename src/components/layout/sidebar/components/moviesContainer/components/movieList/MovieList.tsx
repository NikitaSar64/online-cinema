import { IMovie } from '@shared/types/movie.types';
import React, { FC } from 'react'
import styles from './MovieList.module.scss';
import { MovieItem } from '../movieItem/MovieItem';
import Link from 'next/link';

export interface IMovieList{
    title: string;
    link: string;
    movies: IMovie[];
}

export const MovieList: FC<IMovieList> = ({link, title, movies}) => {
  return (
    <div className={styles.list}>
        <div className={styles.heading}>
            {title}    
        </div>
        {movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
        <Link href={link} className={styles.button}>
            See more
        </Link>
    </div>
  )
}