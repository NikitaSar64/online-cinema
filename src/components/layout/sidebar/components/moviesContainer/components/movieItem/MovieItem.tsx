import { IMovie } from '@shared/types/movie.types'
import React, { FC } from 'react'
import styles from './MovieItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { getGenresList } from '@utils/movie/getGenresList';
import MaterialIcon from '@components/ui/materialIcon/MaterialIcon';


export const MovieItem: FC<{movie: IMovie}> = ({movie}) => {

  return (
    <div className={styles.item}>
        <Link href="#">
            <Image 
                draggable={false} 
                alt={movie.name} 
                width={65} 
                height={97} 
                src={movie.poster} 
                priority/>
        </Link>
        <div className={styles.info}>
            <div>
                <div className={styles.title}>
                    {movie.name}
                </div>
                <div className={styles.genres}>
                    {movie.genres.map(({genre}, index) => 
                        <Link key={index} href="#">
                            {getGenresList(index, movie.genres.length, genre.name)}
                        </Link>
                    )}
                </div>
            </div>
            <div className={styles.rating}>
                <MaterialIcon name='MdStarRate'/>
                <span>{movie.rating}</span>
            </div>
        </div>
    </div>
  )
}