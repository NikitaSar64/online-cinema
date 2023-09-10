import React from 'react'
import { useQuery } from 'react-query'
import { getPopularMovies } from '@services/movie.service'
import { SkeletonLoader } from '@components/ui/skeletonloader/SkeletonLoader'
import { MovieList } from '../movieList/MovieList'

export const PopularMovies = () => {
    const {isLoading, data: popularMovies} = useQuery('Popular movies in sidebar', () => getPopularMovies())

  return (
    isLoading ? <div className='mt-11'>
      <SkeletonLoader count={2} className='h-28 mb-4'/>
    </div> : <MovieList link='/trending' movies={popularMovies || []} title='Popular Movies'/>
  )
}