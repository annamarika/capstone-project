import React, { useEffect, useState } from 'react';
import Form from '../src/components/Form/Form';
import { nanoid } from 'nanoid';
import { saveToLocal, loadFromLocal } from '../src/components/lib/localStorage';

export default function Create() {
	const [products, setProducts] = useState(loadFromLocal('localProducts'));

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

	return <Form onAddProduct={addProduct} />;
}
