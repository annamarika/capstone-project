import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({ user: String });
const User = mongoose.models.User ?? mongoose.model('User', userSchema);

export default User;
