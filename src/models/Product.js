import mongoose from 'mongoose';
const { Schema } = mongoose;
// eslint-disable-next-line no-unused-vars
import User from './User';

const productSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		image: { type: String, required: true },
		title: { type: String, required: true },
		detail: { type: String, required: true },
		bookmark: { type: Boolean, required: true },
	},
	{
		timestamps: true,
	}
);
const Product = mongoose.models.Product ?? mongoose.model('Product', productSchema);

export default Product;
