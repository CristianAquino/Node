import { upload, deleteUpload } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const uploadImage = async (req, res) => {
  const { folder } = req.body;
  console.log(folder);
  const result = await upload(req.files.image.tempFilePath, folder);
  await fs.remove(req.files.image.tempFilePath);
  console.log(result);
  res.send("received and upload");
};

export const deleteImage = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  await deleteUpload(id);
  res.send("deleted");
};
