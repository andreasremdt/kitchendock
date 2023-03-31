import { v2 as cloudinary } from "cloudinary";

export const config = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function upload(folder: string, data: string) {
  const response = await cloudinary.uploader.upload(data, {
    folder,
  });

  return response.public_id;
}
