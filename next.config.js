/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_API_URL,
	},
	images: {
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: 'upload.wikimedia.org',
			  port: '',
			},
		  ],
	}
}

module.exports = nextConfig
