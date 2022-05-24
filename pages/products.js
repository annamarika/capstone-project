import { getProducts } from '../src/services/get-products';
import React, { useEffect, useState } from 'react';
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

export default function Products({ initialProduct }) {
	const ProductGrid = dynamic(() => import('../src/components/Product/ProductGrid'), {
		ssr: false,
	});

	const [products, setProducts] = useState(loadFromLocal('localProducts') ?? initialProduct);

	useEffect(() => {
		saveToLocal('localProducts', products);
	}, [products]);

	const deleteProduct = id => {
		setProducts(products.filter(product => product.id !== id));
	};

	const updateProduct = (id, dataObject) => {
		const updateProduct = products.map(product =>
			product.id === id ? { ...dataObject, altText: dataObject.title, id: id } : product
		);
		setProducts(updateProduct);
	};

	return (
		<ProductGrid
			products={products}
			onDeleteProduct={deleteProduct}
			onUpdateProduct={updateProduct}
		/>
	);
}
