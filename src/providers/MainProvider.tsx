"use client"

import { FC, HTMLAttributes } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@components/layout/Layout'
import { ReduxToast } from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import { ProgressBar } from './ProgressBar'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const MainProvider: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
	return (
			<ProgressBar>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<ReduxToast/>
						<Layout>
							{children}
						</Layout>
					</QueryClientProvider>
				</Provider>
			</ProgressBar>
	)
}
