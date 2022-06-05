import { dbConnect } from '../Components/lib/database';
import Product from '../models/Product';

export const getProducts = async () => {
	await dbConnect();
	const products = await Product.find().populate('user');

	return products.map(({ id, image, title, detail, user }) => ({
		id,
		image,
		title,
		detail,
		user: {
			id: user.id,
			name: user.name,
			email: user.email,
		},
	}));
};
