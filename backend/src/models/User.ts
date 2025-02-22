import mongoose, { Document } from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export default mongoose.model<IUser>('User', UserSchema);
