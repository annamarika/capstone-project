import Product from '../../../src/models/Product';
import User from '../../../src/models/User';
import { dbConnect } from '../../../src/Components/lib/database';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			const data = JSON.parse(request.body);
			await dbConnect();
			let user = await User.findOne({ email: data.user.email });
			if (!user) {
				user = await User.create({ ...data.user });
			}
			const newProduct = await Product.create({
				image: data.image,
				title: data.title,
				detail: data.detail,
				user: user.id,
				bookmark: data.bookmark,
			});
			response.status(200).json({ message: 'product created', product: newProduct });
		} catch (error) {
			response.status(500).json({ error: 'Error could not POST' });
		}
	} else {
		response.status(405).json({ error: 'wrong method' });
	}
}
