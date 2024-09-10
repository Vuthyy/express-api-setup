import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../configs/.env.development") });

export const configs = {
  mongodbUrl: process.env.MONGODB_URI || "",
  port: process.env.PORT || 4000,
};
