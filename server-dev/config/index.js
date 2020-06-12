import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8888;
export const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017/${process.env.API_NAME}`;
export const API_NAME = process.env.API_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;
export const CACHE_KEY = process.env.CACHE_KEY;
