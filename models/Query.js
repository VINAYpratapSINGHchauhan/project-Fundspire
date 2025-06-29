import mongoose from "mongoose";
const { Schema, model } = mongoose;

const QuerySchema = new Schema({
    name: { type: String , required: true },
    email: { type: String, required: true },
    query: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    });

 
export default mongoose.models.Query || model("Query", QuerySchema);;