import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		image: { type: String, required: true },
		title: { type: String, required: true },
		detail: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);
const Product = mongoose.models.Product ?? mongoose.model('Product', productSchema);

export default Product;
