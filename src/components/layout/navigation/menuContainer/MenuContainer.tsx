import React, { FC } from 'react'

import { GenreMenu } from './components/genres/GenreMenu'
import Menu from './components/menu/Menu'
import { mainMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={mainMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
