import { FC, HTMLAttributes } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@components/layout/Layout'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const MainProvider: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
