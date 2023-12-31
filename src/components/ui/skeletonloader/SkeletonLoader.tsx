import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoader: FC<SkeletonProps> = ({ className, ...other }) => {
	return (
		<Skeleton
			{...other}
			className={cn('rounded-lg', className)}
			baseColor="#1f2125"
			highlightColor="#292A2E"
		/>
	)
}
