import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/components/Product/ProductGrid';
import React, { useState } from 'react';
import Form from '../src/components/Form/Form';
import { nanoid } from 'nanoid';

export function getStaticProps() {
	const initialProduct = getProducts();

	return {
		props: {
			initialProduct,
		},
	};
}

export default function Home({ initialProduct }) {
	const [products, setProducts] = useState(initialProduct);

	const addProduct = newdata => {
		setProducts([
			...products,
			{
				id: nanoid(),
				title: newdata.title,
				detail: newdata.detail,
				image: newdata.image,
				altText: newdata.title,
				email: newdata.email,
			},
		]);
	};

	return (
		<>
			<Form onAddProduct={addProduct} />
			<ProductGrid products={products} />
		</>
	);
}
