import Product from '../../../src/models/Product';

export default async function handler(req, res) {
	const { id } = req.query;

	if (req.method === 'DELETE') {
		const deleteProduct = await Product.findByIdAndDelete(id);
		res.status(200).json({ message: 'product deleted', product: deleteProduct });
	} else if (req.method === 'PUT') {
		const data = JSON.parse(req.body);
		const changedProduct = await Product.findByIdAndUpdate(id, data, { new: true });

		res.status(200).json({ message: 'Product updated', card: changedProduct });
	} else {
		const singleProduct = await Product.findById(id);
		res.status(200).json(singleProduct);
	}
}
