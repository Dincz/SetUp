import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Category", categorySchema);
