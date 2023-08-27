'use client'

import React from 'react'

import { SkeletonLoader } from '@components/ui/skeletonloader/SkeletonLoader'

import { usePopularGenres } from '@hooks/usePopularGenres'

import Menu from '../menu/Menu'

export const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={3} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
