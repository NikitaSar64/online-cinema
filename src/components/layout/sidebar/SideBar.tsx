import React, { FC } from 'react'

import styles from './SideBar.module.scss'
import { Search } from './components/search/Search'

const SideBar: FC = () => {
	return <div className={styles.sidebar}>
		<Search/>
		{/* {'movies container'} */}
	</div>
}

export default SideBar
