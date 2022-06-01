import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	name: String,
	image: String,
	title: String,
	detail: String,
	email: String,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
const Product = mongoose.models.Product ?? mongoose.model('Product', productSchema);

export default Product;
