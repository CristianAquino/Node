import { v2 as cloudinary } from "cloudinary";
import { CLOUD_NAME, API_SECRET, API_KEY } from "../config.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

export const upload = async (filePath, folderName) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: `${folderName}`,
  });
};

export const deleteUpload = async (id) => {
  cloudinary.uploader.destroy(id);
};
