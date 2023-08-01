import React, { FC } from 'react'

import Auth from '../auth/Auth'
import MenuItem from '../menuItem/MenuItem'

import styles from './Menu.module.scss'
import { MenuProps } from './Menu.props'

const Menu: FC<{ menu: MenuProps }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <Auth /> : null}
			</ul>
		</div>
	)
}

export default Menu
