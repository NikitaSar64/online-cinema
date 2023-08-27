import React, { FC } from 'react'

import styles from './Search.module.scss'
import { useSearch } from '@hooks/useSearch'
import { SearchList } from '../searchlist/SearchList';
import { SearchField } from '@components/ui/searchField/SearchField';

export const Search: FC = () => {
	const {isSuccess, data, handleSearch, searchTerm} = useSearch();

	return <div className={styles.wrapper}>
		<SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
		{isSuccess && <SearchList movies={data || []}/>}
	</div>
}
