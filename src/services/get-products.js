import { dbConnect } from '../Components/lib/database';
import Product from '../models/Product';

export const getProducts = async () => {
	await dbConnect();
	const data = await Product.find();
	console.log(data);

	return data.map(({ id, image, name, title, detail, email }) => ({
		id,
		image,
		name,
		title,
		detail,
		email,
	}));
};
