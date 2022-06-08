import { dbConnect } from '../Components/lib/database';
import Product from '../models/Product';

export const getProducts = async () => {
	await dbConnect();
	const products = await Product.find().populate('user');

	return products.map(({ id, image, title, detail, user, bookmark }) => ({
		id,
		image,
		title,
		detail,
		bookmark: Boolean(bookmark),
		user: {
			id: user.id,
			name: user.name,
			email: user.email,
		},
	}));
};

/*const animals = await Animal.find();
console.log('getAnimals: ', animals);

return animals.map(({ id, name, spotsRef, description, wiki }) => {
	spotsRef = spotsRef.map(spotId => spotId.toString());
	return {
		id,
		name,
		spotsRef,
		description,
		wiki,
	};
});*/
