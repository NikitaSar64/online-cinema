import React from 'react'
import { PopularMovies } from './components/popularMovies/PopularMovies';
import { FavouriteMovies } from './components/favouriteMovies/FavouriteMovies';

export const MoviesContainer = () => {
  return (
    <div>
      <PopularMovies/>
      <FavouriteMovies/>
    </div>
  )
}