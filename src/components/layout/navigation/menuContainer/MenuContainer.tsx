import React, { FC } from 'react'

import Menu from './components/menu/Menu'
import { mainMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={mainMenu} />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
