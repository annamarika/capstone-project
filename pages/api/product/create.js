import Product from '../../../src/models/Product';
import User from '../../../src/models/User';
import { dbConnect } from '../../../src/Components/lib/database';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			const data = JSON.parse(request.body);
			await dbConnect();
			let user = await User.findOne({ name: data.name });
			if (!user) {
				user = await User.create({ name: data.name });
			}
			const newProduct = await Product.create({
				name: data.id,
				image: data.image,
				title: data.title,
				detail: data.detail,
				email: data.email,
			});
			response.status(200).json({ message: 'product created', product: newProduct });
		} catch (error) {
			response.status(500).json({ error: 'Error could not POST' });
		}
	} else {
		response.status(405).json({ error: 'wrong method' });
	}
}
