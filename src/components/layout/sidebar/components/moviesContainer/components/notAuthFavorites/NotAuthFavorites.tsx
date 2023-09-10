import React, { FC } from 'react'
import styles from './NotAuthFavorites.module.scss';

export const NotAuthFavorites: FC = ( ) => {
  return (
    <div className={styles.notAuthFavorites}>For viewing favourites - authorize</div>
  )
}