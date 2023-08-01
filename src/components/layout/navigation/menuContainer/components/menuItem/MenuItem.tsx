'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

import MaterialIcon from '@components/ui/materialIcon/MaterialIcon'

import { MenuItemProps } from './MenuItem.props'
import styles from './MenuItems.module.scss'

const MenuItem: FC<{ item: MenuItemProps }> = ({ item }) => {
	const path = usePathname()

	return (
		<li className={cn(styles.li, { [styles.active]: path == item.link })}>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
