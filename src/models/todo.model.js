import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
 task: String,
 status: Boolean,
}); 

export default model("Todo", TodoSchema);