import { model, models, Schema } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

export const User = models.User || model("User", userSchema);
