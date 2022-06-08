import Product from '../../../src/models/Product';

export default async function handler(request, response) {
	const { id } = request.query;

	if (request.method === 'PUT') {
		try {
			const data = JSON.parse(request.body);
			const bookmarkProduct = await Product.findByIdAndUpdate(
				id,
				{ bookmark: data.bookmark },
				{ new: true }
			);
			response.status(200).json({ message: 'product bookmarked', product: bookmarkProduct });
		} catch (error) {
			response.status(500).json({ error: 'Error could not bookmark' });
		}
	} else {
		const singleBookmarkProduct = await Product.findById(id);
		response.status(200).json(singleBookmarkProduct);
	}
}
