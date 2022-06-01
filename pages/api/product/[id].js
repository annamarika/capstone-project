import Product from '../../../src/models/Product';

export default async function handler(request, response) {
	const { id } = request.query;

	if (request.method === 'DELETE') {
		try {
			const deletePost = await Product.findByIdAndDelete(id);
			response.status(200).json({ message: 'product deleted', product: deletePost });
		} catch (error) {
			response.status(500).json({ error: 'Error could not delete' });
		}
	} else if (request.method === 'PUT') {
		const data = JSON.parse(request.body);
		const changedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
		response.status(200).json({ message: 'product updated', product: changedProduct });
	} else {
		const singleProduct = await Product.findById(id);
		response.status(200).json(singleProduct);
	}
}
