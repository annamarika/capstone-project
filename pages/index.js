import { getProducts } from '../src/services/get-products';
import React, { useEffect, useState } from 'react';
import Form from '../src/components/Form/Form';
import { nanoid } from 'nanoid';
import { saveToLocal, loadFromLocal } from '../src/components/lib/localStorage';
import dynamic from 'next/dynamic';

export function getStaticProps() {
	const initialProduct = getProducts();

	return {
		props: {
			initialProduct,
		},
	};
}

export default function Home({ initialProduct }) {
	const ProductGrid = dynamic(() => import('../src/components/Product/ProductGrid'), {
		ssr: false,
	});

	const [products, setProducts] = useState(loadFromLocal('localProducts') ?? initialProduct);

	useEffect(() => {
		saveToLocal('localProducts', products);
	}, [products]);

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

	const deleteProduct = id => {
		setProducts(products.filter(product => product.id !== id));
	};

	const updateProduct = (id, title, detail, image, altText, email) => {
		const indexToUpdate = products.findIndex(product => product.id === id);
		const productsFirstPart = products.slice(0, indexToUpdate);
		const productsSecondPart = products.slice(indexToUpdate + 1);
		setProducts([
			...productsFirstPart,
			{
				id,
				title,
				detail,
				image,
				altText,
				email,
			},
			...productsSecondPart,
		]);
	};

	return (
		<>
			<Form onAddProduct={addProduct} />
			<ProductGrid
				products={products}
				onDeleteProduct={deleteProduct}
				onUpdateProduct={updateProduct}
			/>
		</>
	);
}
