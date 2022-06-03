/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	env: {
		CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
		CLOUDINARY_CLOUD: process.env.CLOUDINARY_CLOUD,
	},
	images: {
		loader: 'cloudinary',
		path: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD}/image/upload/`,
	},
	swcMinify: false,
};

module.exports = nextConfig;
