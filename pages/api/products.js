import { getProducts } from '../../src/services/get-products';

export default async function handler(request, response) {
	const products = await getProducts();
	response.status(200).json(products);
}
