import Product from '../../../src/models/Product';
import User from '../../../src/models/User';
import { dbConnect } from '../../../src/Components/lib/database';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		const data = JSON.parse(request.body);
		await dbConnect();

		let user = await User.findOne({ user: data.user });
		if (!user) {
			user = await User.create({ user: data.user });
		}

		const newProduct = await Product.create({
			user: data.user,
			image: data.image,
			title: data.title,
			detail: data.detail,
			email: data.email,
		});

		response.status(200).json({ message: 'product created', product: newProduct });
	} else {
		response.status(400).json({ error: 'wrong method' });
	}
}
