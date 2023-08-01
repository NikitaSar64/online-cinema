import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logoImg from '@assets/images/logo.png'

import style from './Logo.module.scss'

const Logo = () => {
	return (
		<Link href="/" className={style.logo}>
			<Image src={logoImg} alt="Online Cinema" draggable={false} />
			<span className={style.logoText}>Online Cinema</span>
		</Link>
	)
}

export default Logo
