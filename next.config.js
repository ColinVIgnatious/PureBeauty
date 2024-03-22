/** @type {import('next').NextConfig} */
module.exports = {
	async rewrites() {
		return [
			{
				source: '/wp-json/:path*',
				destination: 'https://wp.planetmedia.dev/wp-json/:path*',
			},
			
		]
	},
	images: {
		domains: ['wp.planetmedia.dev'],
	  },
}


