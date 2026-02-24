// migrate-products.js
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import products from "./constants/productsdb.ts"

dotenv.config();

// ... Cloudinary config here ...
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const migrateImages = async () => {
  const updatedProducts = [];
  console.log("Hi from migrate JS!")

  for (const product of products) {
    try {
      // ✅ FIX: Join current directory directly with the image string
      // If product.image is "images/products/...", this looks in ./images/products/...
      const localPath = path.resolve(process.cwd(), product.image);

      if (!fs.existsSync(localPath)) {
        console.error(`❌ File NOT found at: ${localPath}`);
        continue;
      }

      const uploadResponse = await cloudinary.uploader.upload(localPath, {
        folder: "store_products",
        use_filename: true,
      });

      updatedProducts.push({
        ...product,
        image: uploadResponse.secure_url
      });

      console.log(`✅ Uploaded ${product.name}`);
    } catch (error) {
      console.error(`Error uploading ${product.name}:`, error);
    }
  }

  // Save the result
  fs.writeFileSync('updated_products.json', JSON.stringify(updatedProducts, null, 2));
};

migrateImages()