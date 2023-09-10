import React, { FC } from 'react'

import styles from './SideBar.module.scss'
import { Search } from './components/search/Search'
import { MoviesContainer } from './components/moviesContainer/MoviesContainer'

const SideBar: FC = () => {
	return <div className={styles.sidebar}>
		<Search/>
		<MoviesContainer/>
	</div>
}

export default SideBar
