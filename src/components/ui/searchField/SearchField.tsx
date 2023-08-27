import React, { FC } from 'react'

import styles from './SearchField.module.scss';
import { SearchFieldProps } from './SearchField.props';
import MaterialIcon from '../materialIcon/MaterialIcon';

export const SearchField: FC<SearchFieldProps> = ({searchTerm, handleSearch}) => {
  return (
    <div className={styles.search}>
        <MaterialIcon name='MdSearch'/>
        <input placeholder='Search' value={searchTerm} onChange={handleSearch}/>
    </div>
  )
}