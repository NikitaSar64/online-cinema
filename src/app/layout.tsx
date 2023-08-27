import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Watch movies online',
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser',
	icons: {
		icon: './icon.ico',
		shortcut: './icon.ico',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
