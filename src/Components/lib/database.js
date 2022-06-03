const url = process.env.DB_CONNECTION;
import mongoose from 'mongoose';
export async function dbConnect() {
	try {
		await mongoose.connect(url);
		console.log('Connect to MongoDB');
	} catch (error) {
		console.error('ERR=R, could not connect', error.message);
	}
}
