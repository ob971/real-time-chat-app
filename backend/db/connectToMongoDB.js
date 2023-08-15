import mongoose from "mongoose";
const mongoURI = 'mongodb://localhost:5001/real time chat app';










const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};







export default connectToMongoDB;