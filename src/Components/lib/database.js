import mongoose from 'mongoose';

const { MONGODB_URL } = process.env;

export async function dbConnect() {
	try {
		await mongoose.connect(MONGODB_URL);
		console.log('Connect to MongoDB');
	} catch (error) {
		console.error('ERR=R, could not connect', error.message);
	}
}
