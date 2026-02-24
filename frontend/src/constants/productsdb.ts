// // products.js

// export const productsDB = [
//   { name: "Modern Loafers", description: "A stylish loafers perfect for everyday wear, crafted with quality materials.", price: 234.93, category: "shoes", countInStock: 60, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Minimalist Round Frames", description: "A stylish round frames perfect for everyday wear, crafted with quality materials.", price: 217.28, category: "glasses", countInStock: 60, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Urban Oversized T-Shirt", description: "A stylish oversized t-shirt perfect for everyday wear, crafted with quality materials.", price: 52.06, category: "t-shirt", countInStock: 30, imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
//   { name: "Premium Sunglasses", description: "A stylish sunglasses perfect for everyday wear, crafted with quality materials.", price: 194.29, category: "glasses", countInStock: 75, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Classic Bomber Jacket", description: "A stylish bomber jackets perfect for everyday wear, crafted with quality materials.", price: 108.14, category: "jackets", countInStock: 57, imageUrl: "https://images.unsplash.com/photo-1536610316343-e696b8d1f6b9" },
//   { name: "Sporty Running Shoes", description: "A stylish running shoes perfect for everyday wear, crafted with quality materials.", price: 23.32, category: "shoes", countInStock: 40, imageUrl: "https://images.unsplash.com/photo-1606813902759-2b5e48b3e6f9" },
//   { name: "Premium Sneakers", description: "A stylish sneakers perfect for everyday wear, crafted with quality materials.", price: 227.38, category: "shoes", countInStock: 77, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Modern Aviators", description: "A stylish aviators perfect for everyday wear, crafted with quality materials.", price: 177.03, category: "glasses", countInStock: 74, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Modern Trainers", description: "A stylish trainers perfect for everyday wear, crafted with quality materials.", price: 52.84, category: "shoes", countInStock: 50, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Premium Leather Jacket", description: "A stylish leather jackets perfect for everyday wear, crafted with quality materials.", price: 125.52, category: "jackets", countInStock: 24, imageUrl: "https://images.unsplash.com/photo-1536610316343-e696b8d1f6b9" },
//   { name: "Modern Sneakers", description: "A stylish sneakers perfect for everyday wear, crafted with quality materials.", price: 165.51, category: "shoes", countInStock: 65, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Classic Denim Jacket", description: "A stylish denim jackets perfect for everyday wear, crafted with quality materials.", price: 105.85, category: "jackets", countInStock: 78, imageUrl: "https://images.unsplash.com/photo-1593032465171-8ecb17a8a68c" },
//   { name: "Classic Running Shoes", description: "A stylish running shoes perfect for everyday wear, crafted with quality materials.", price: 90.14, category: "shoes", countInStock: 43, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Modern Puffer Jacket", description: "A stylish puffer jackets perfect for everyday wear, crafted with quality materials.", price: 206.95, category: "jackets", countInStock: 76, imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646" },
//   { name: "Classic Backpack", description: "A stylish backpack perfect for everyday wear, crafted with quality materials.", price: 154.43, category: "bags", countInStock: 64, imageUrl: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0" },
//   { name: "Premium Running Shoes", description: "A stylish running shoes perfect for everyday wear, crafted with quality materials.", price: 219.23, category: "shoes", countInStock: 28, imageUrl: "https://images.unsplash.com/photo-1606813902759-2b5e48b3e6f9" },
//   { name: "Urban Handbag", description: "A stylish handbag perfect for everyday wear, crafted with quality materials.", price: 247.51, category: "bags", countInStock: 21, imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
//   { name: "Minimalist Leather Jacket", description: "A stylish leather jackets perfect for everyday wear, crafted with quality materials.", price: 73.74, category: "jackets", countInStock: 62, imageUrl: "https://images.unsplash.com/photo-1536610316343-e696b8d1f6b9" },
//   { name: "Modern Eyeglasses", description: "A stylish eyeglasses perfect for everyday wear, crafted with quality materials.", price: 197.88, category: "glasses", countInStock: 51, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Urban Running Shoes", description: "A stylish running shoes perfect for everyday wear, crafted with quality materials.", price: 40.46, category: "shoes", countInStock: 39, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Modern Loafers", description: "A stylish loafers perfect for everyday wear, crafted with quality materials.", price: 69.32, category: "shoes", countInStock: 27, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
//   { name: "Luxury Crossbody Bag", description: "A stylish crossbody bags perfect for everyday wear, crafted with quality materials.", price: 21.59, category: "bags", countInStock: 52, imageUrl: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0" },
//   { name: "Classic Aviators", description: "A stylish aviators perfect for everyday wear, crafted with quality materials.", price: 34.32, category: "glasses", countInStock: 52, imageUrl: "https://images.unsplash.com/photo-1518552780197-78e824f3c7d7" },
//   { name: "Luxury Loafers", description: "A stylish loafers perfect for everyday wear, crafted with quality materials.", price: 143.66, category: "shoes", countInStock: 80, imageUrl: "https://images.unsplash.com/photo-1606813902759-2b5e48b3e6f9" },
//   { name: "Luxury Sunglasses", description: "A stylish sunglasses perfect for everyday wear, crafted with quality materials.", price: 79.12, category: "glasses", countInStock: 39, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Minimalist Eyeglasses", description: "A stylish eyeglasses perfect for everyday wear, crafted with quality materials.", price: 180.34, category: "glasses", countInStock: 57, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Premium Sneakers", description: "A stylish sneakers perfect for everyday wear, crafted with quality materials.", price: 225.2, category: "shoes", countInStock: 10, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
//   { name: "Minimalist Crossbody Bag", description: "A stylish crossbody bags perfect for everyday wear, crafted with quality materials.", price: 140.52, category: "bags", countInStock: 36, imageUrl: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0" },
//   { name: "Sporty Running Shoes", description: "A stylish running shoes perfect for everyday wear, crafted with quality materials.", price: 180.23, category: "shoes", countInStock: 31, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
//   { name: "Minimalist Backpack", description: "A stylish backpack perfect for everyday wear, crafted with quality materials.", price: 49.21, category: "bags", countInStock: 45, imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
//   { name: "Urban Aviators", description: "A stylish aviators perfect for everyday wear, crafted with quality materials.", price: 33.19, category: "glasses", countInStock: 13, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Urban Leather Jacket", description: "A stylish leather jackets perfect for everyday wear, crafted with quality materials.", price: 197.2, category: "jackets", countInStock: 34, imageUrl: "https://images.unsplash.com/photo-1593032465171-8ecb17a8a68c" },
//   { name: "Luxury Graphic Tee", description: "A stylish graphic tee perfect for everyday wear, crafted with quality materials.", price: 90.48, category: "t-shirt", countInStock: 10, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Premium Loafers", description: "A stylish loafers perfect for everyday wear, crafted with quality materials.", price: 28.53, category: "shoes", countInStock: 56, imageUrl: "https://images.unsplash.com/photo-1606813902759-2b5e48b3e6f9" },
//   { name: "Classic Trainers", description: "A stylish trainers perfect for everyday wear, crafted with quality materials.", price: 181.8, category: "shoes", countInStock: 59, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Urban Handbag", description: "A stylish handbag perfect for everyday wear, crafted with quality materials.", price: 132.67, category: "bags", countInStock: 24, imageUrl: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0" },
//   { name: "Sporty Backpack", description: "A stylish backpack perfect for everyday wear, crafted with quality materials.", price: 93.22, category: "bags", countInStock: 59, imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
//   { name: "Urban Leather Jacket", description: "A stylish leather jackets perfect for everyday wear, crafted with quality materials.", price: 104.61, category: "jackets", countInStock: 14, imageUrl: "https://images.unsplash.com/photo-1536610316343-e696b8d1f6b9" },
//   { name: "Luxury Oversized T-Shirt", description: "A stylish oversized t-shirt perfect for everyday wear, crafted with quality materials.", price: 28.13, category: "t-shirt", countInStock: 28, imageUrl: "https://images.unsplash.com/photo-1585386959984-a41552231693" },
//   { name: "Urban Graphic Tee", description: "A stylish graphic tee perfect for everyday wear, crafted with quality materials.", price: 181.85, category: "t-shirt", countInStock: 17, imageUrl: "https://images.unsplash.com/photo-1585386959984-a41552231693" },
//   { name: "Modern Sunglasses", description: "A stylish sunglasses perfect for everyday wear, crafted with quality materials.", price: 158.21, category: "glasses", countInStock: 23, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Sporty Plain Tee", description: "A stylish plain tee perfect for everyday wear, crafted with quality materials.", price: 94.28, category: "t-shirt", countInStock: 66, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//   { name: "Luxury Leather Jacket", description: "A stylish leather jackets perfect for everyday wear, crafted with quality materials.", price: 177.54, category: "jackets", countInStock: 50, imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646" },
//   { name: "Premium Loafers", description: "A stylish loafers perfect for everyday wear, crafted with quality materials.", price: 234.15, category: "shoes", countInStock: 14, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Modern Loafers", description: "A stylish loafers perfect for everyday wear, crafted with quality materials.", price: 200.21, category: "shoes", countInStock: 19, imageUrl: "https://images.unsplash.com/photo-1606813902759-2b5e48b3e6f9" },
//   { name: "Sporty Sneakers", description: "A stylish sneakers perfect for everyday wear, crafted with quality materials.", price: 247.19, category: "shoes", countInStock: 42, imageUrl: "https://images.unsplash.com/photo-1606813902759-2b5e48b3e6f9" },
//   { name: "Classic Trainers", description: "A stylish trainers perfect for everyday wear, crafted with quality materials.", price: 220.93, category: "shoes", countInStock: 54, imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
//   { name: "Premium Tote Bag", description: "A stylish tote bags perfect for everyday wear, crafted with quality materials.", price: 217.26, category: "bags", countInStock: 52, imageUrl: "https://images.unsplash.com/photo-1504215680853-026ed2a45def" },
//   { name: "Minimalist Puffer Jacket", description: "A stylish puffer jackets perfect for everyday wear, crafted with quality materials.", price: 120.09, category: "jackets", countInStock: 46, imageUrl: "https://images.unsplash.com/photo-1536610316343-e696b8d1f6b9" },
//   { name: "Luxury Round Frames", description: "A stylish round frames perfect for everyday wear, crafted with quality materials.", price: 27.78, category: "glasses", countInStock: 58, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" },
//];



export const productsDB =  [
  {
    name: "Urban Oversized Tee",
    description: "Oversized cotton tee with a streetwear fit.",
    price: 32.99,
    category: "t-shirt",
    countInStock: 50,
    imageUrl: "https://media.istockphoto.com/id/950965584/photo/man-in-white-blank-t-shirt.jpg?s=612x612&w=0&k=20&c=HZ7nWNBwbA_rcWZoVmJaHjdDzTfS6eYcf7cVeA4SvXI="
  },
  {
    name: "Minimalist White Tee",
    description: "Soft premium cotton blue t-shirt for everyday wear.",
    price: 24.50,
    category: "t-shirt",
    countInStock: 120,
    imageUrl: "https://media.istockphoto.com/id/137996281/photo/blue-t-shirt.jpg?s=612x612&w=0&k=20&c=7D3z5wCRV3Duvyc8lLFJVAFqkWMg4xHcDieuqspq8zk="
  },
  {
    name: "Earth Tone Tee",
    description: "Neutral tone premium tee for minimalist style.",
    price: 26.75,
    category: "t-shirt",
    countInStock: 90,
    imageUrl: "https://i5.walmartimages.com/seo/Men-s-Earth-Tone-Pocket-T-Shirts-5-Pack_fa3b9313-2daf-41e8-8df3-809bd9835b48_1.210af6f2217fa2e0222e9b85b5032cef.jpeg"
  },
  {
    name: "Athletic Fit Performance Tee",
    description: "Breathable stretch tee designed for active comfort.",
    price: 31.50,
    category: "t-shirt",
    countInStock: 65,
    imageUrl: "https://sfycdn.speedsize.com/2780c694-3419-4266-9652-d242439affeb/stateandliberty.com/cdn/shop/files/6M7A6156copy.jpg?v=1748398713&width=112"
  },
  {
    name: "Soft Beige Cotton Tee",
    description: "Comfort-fit beige cotton tee for relaxed outfits.",
    price: 23.60,
    category: "t-shirt",
    countInStock: 95,
    imageUrl: "https://www.angelominetti.it/t-shirts/109074-light-beige-cotton-t-shirtu6ii.html?srsltid=AfmBOoqwTiNv8VnzXorqLt07FTF2HO5wa4imHrWrqGgrMSwNpTrSZd2N"
  },
  {
    name: "Monochrome Street Tee",
    description: "Modern monochrome tee — clean and stylish.",
    price: 33.10,
    category: "t-shirt",
    countInStock: 55,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSm58fvjlPNlwjxcJcoHsTVbobe7FBRYoadsnfLUt5Mj41h5b1TWQDkSk&s"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    name: "Nike Air Monarch IV",
    description: "Awesome trending Nike Sneakers.",
    price: 139.99,
    category: "shoes",
    countInStock: 50,
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    name: "Flat Slip On Pumps",
    description: "Premium green flats for everyday wear.",
    price: 24.50,
    category: "shoes",
    countInStock: 120,
  },
  {
    name: "Vintage Washed Tee",
    description: "Relaxed vintage-style washed t-shirt with faded look.",
    price: 29.90,
    category: "t-shirt",
    countInStock: 75,
    imageUrl: "https://media.istockphoto.com/id/182783026/photo/a-grey-t-shirt-on-white-background.jpg?s=612x612&w=0&k=20&c=r9LrPur3wEO1Eb1URo7TjIpxSMlCuLfHHq6fW4IFcdM="
  },
  {
    name: "Street White Tee",
    description: "Classic white tee for urban style.",
    price: 34.99,
    category: "t-shirt",
    countInStock: 60,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Classic ripped jeans",
    description: "Timeless ripped jeans for females.",
    price: 22.49,
    category: "jeans",
    countInStock: 100,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    name: "Vintage 90s Dragon Graphic Black Crewneck T-Shirt - XL",
    description: "Vintage 90s Dragon Graphic Black Crewneck T-Shirt - XL.",
    price: 27.99,
    category: "t-shirt",
    countInStock: 80,
    imageUrl: "https://cdn.shopify.com/s/files/1/0574/6851/8600/files/MECT-S91371V_2_540x.jpg?v=1762137163"
  },
  {
    name: "DKNY Denim Jacket",
    description: "Vintage 00s DKNY Oversized Denim Jacket - L.",
    price: 133.10,
    category: "jackets",
    countInStock: 15,
    imageUrl: "https://cdn.shopify.com/s/files/1/0574/6851/8600/files/WOCOUT91444V_2_540x.jpg?v=1762310026"
  },
  {
    name: "Levi Brown Denim Jacket",
    description: "Vintage 2000's Levi's Brown Denim Jacket - S.",
    price: 180.00,
    category: "jackets",
    countInStock: 55,
    imageUrl: "https://cdn.shopify.com/s/files/1/0574/6851/8600/files/MECOUT89766V_2_540x.jpg?v=1757125868"
  },
  {
    name: "Vintage Y2k 00s Marc By Marc Jacobs Sunglasses",
    description: "Vintage Y2k 00s Marc By Marc Jacobs Sunglasses.",
    price: 83.10,
    category: "glasses",
    countInStock: 21,
    imageUrl: "https://cdn.shopify.com/s/files/1/0574/6851/8600/files/UNASUN88126V_6351_540x.jpg?v=1754447699"
  },
  {
    name: "Tom Ford Black And Brown Reading Glasses - O/S",
    description: "Tom Ford Black And Brown Reading Glasses - O/S.",
    price: 33.10,
    category: "glasses",
    countInStock: 15,
    imageUrl: "https://cdn.shopify.com/s/files/1/0574/6851/8600/files/UNCSUN48624V_2087_540x.jpg?v=1692586207"
  },
  {
    name: "Timberland Hiking Boots",
    description: "Vintage 00s Diesel Trainers.",
    price: 98.50,
    category: "shoes",
    countInStock: 9,
    imageUrl: "https://cdn.shopify.com/s/files/1/0574/6851/8600/files/MECFOO90356V_7179_540x.jpg?v=1761039559"
  },
  {
    name: "Vintage 00s Diesel Trainers",
    description: "Neutral tone premium tee for minimalist style.",
    price: 126.75,
    category: "shoes",
    countInStock: 90,
    imageUrl: "https://www.rokit.co.uk/cdn/shop/files/MEAFOO90260V_7038_720x.jpg?v=1758249169"
  },


  {
    name: "Vintage Samantha Thavasa Harris Tweed Handbag",
    description: "Vintage Samantha Thavasa Harris Tweed Handbag.",
    price: 231.50,
    category: "bags",
    countInStock: 18,
    imageUrl: "https://www.rokit.co.uk/cdn/shop/files/MEAFOO90260V_7038_720x.jpg?v=1758249169"
  },
  {
    name: "Vintage 00s Diesel Cross-body Satchel",
    description: "Vintage 00s Diesel Cross-body Satchel.",
    price: 184.00,
    category: "bags",
    countInStock: 5,
    imageUrl: "https://www.rokit.co.uk/cdn/shop/files/UNABAG90116V_6929_720x.jpg?v=1757903692"
  },
  {
    name: "The HEA 3 vs 2 Suit",
    description: "Modern and stylish Suit.",
    price: 650.99,
    category: "suits",
    countInStock: 5,
    imageUrl: "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2025/07/dejiandkola_1753201473_3682443319699614795_4138217776-433x516.jpg"
  },
  {
    name: "Dark Green Perennial Tailored Fit Havana Suit",
    description: "All Season Pure Tropical Wool by Vitale Barberis Canonico, Italy",
    price: 550.00,
    category: "suits",
    countInStock: 8,
    imageUrl: "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2025/07/dejiandkola_1753201473_3682443319699614795_4138217776-433x516.jpg"
  },

  {
    name: "Slim Fit Blue Jeans",
    description: "Classic slim fit denim jeans with stretch for everyday comfort.",
    price: 64.99,
    category: "jeans",
    countInStock: 45,
    imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/530205.jpg?im=Resize,width=450"
  },
  {
    name: "Black Straight-Leg Jeans",
    description: "Timeless straight-leg jeans in deep washed black denim.",
    price: 72.50,
    category: "jeans",
    countInStock: 30,
    imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/AY9635.jpg?im=Resize,width=450"
  },
  {
    name: "Vintage Blue Baggy Jeans",
    description: "Loose-fit baggy jeans with a retro streetwear look.",
    price: 79.00,
    category: "jeans",
    countInStock: 20,
    imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/Y15244.jpg?im=Resize,width=450"
  },
  {
    name: "Distressed Ripped Jeans",
    description: "Light-wash denim with knee rips for a modern rugged look.",
    price: 89.99,
    category: "jeans",
    countInStock: 28,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNErnqfg6lFcHc3KbOFhQypAlAZOWjf2NzQ&s"
  },
  {
    name: "Dark Wash Skinny Jeans",
    description: "Body-hugging skinny jeans in a premium dark wash finish.",
    price: 67.25,
    category: "jeans",
    countInStock: 55,
    imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/448950.jpg?im=Resize,width=450"
  },
];












const products = [
  {
    "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    "image": "src/images/products/athletic-cotton-socks-6-pairs.jpg",
    "name": "Black and Gray Athletic Cotton Socks - 6 Pairs",
    "rating": {
      "stars": 4.5,
      "count": 87
    },
    "priceCents": 1090,
    "keywords": ["socks", "sports", "apparel"]
  },
  {
    "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    "image": "src/images/products/intermediate-composite-basketball.jpg",
    "name": "Intermediate Size Basketball",
    "rating": {
      "stars": 4,
      "count": 127
    },
    "priceCents": 2095,
    "keywords": ["sports", "basketballs"]
  },
  {
    "id": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    "image": "src/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    "name": "Adults Plain Cotton T-Shirt - 2 Pack",
    "rating": {
      "stars": 4.5,
      "count": 56
    },
    "priceCents": 799,
    "keywords": ["tshirts", "apparel", "mens"]
  },
  {
    "id": "54e0eccd-8f36-462b-b68a-8182611d9add",
    "image": "src/images/products/2-slot-toaster-white.jpg",
    "name": "2 Slot Toaster - White",
    "rating": {
      "stars": 5,
      "count": 2197
    },
    "priceCents": 1899,
    "keywords": ["toaster", "kitchen", "appliances"]
  },
  {
    "id": "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    "image": "src/images/products/elegant-white-dinner-plate-set.jpg",
    "name": "2 Piece White Dinner Plate Set",
    "rating": {
      "stars": 4,
      "count": 37
    },
    "priceCents": 2067,
    "keywords": ["plates", "kitchen", "dining"]
  },
  {
    "id": "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    "image": "src/images/products/3-piece-cooking-set.jpg",
    "name": "3 Piece Non-Stick, Black Cooking Pot Set",
    "rating": {
      "stars": 4.5,
      "count": 175
    },
    "priceCents": 3499,
    "keywords": ["kitchen", "cookware"]
  },
  {
    "id": "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    "image": "src/images/products/women-plain-cotton-oversized-sweater-gray.jpg",
    "name": "Cotton Oversized Sweater - Gray",
    "rating": {
      "stars": 4.5,
      "count": 317
    },
    "priceCents": 2400,
    "keywords": ["sweaters", "apparel"]
  },
  {
    "id": "77919bbe-0e56-475b-adde-4f24dfed3a04",
    "image": "src/images/products/luxury-towel-set.jpg",
    "name": "2 Piece Luxury Towel Set - White",
    "rating": {
      "stars": 4.5,
      "count": 144
    },
    "priceCents": 3599,
    "keywords": ["bathroom", "washroom", "restroom", "towels", "bath towels"]
  },
  {
    "id": "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    "image": "src/images/products/facial-tissue-2-ply-8-boxes.jpg",
    "name": "Ultra Soft Tissue 2-Ply - 8 Boxes",
    "rating": {
      "stars": 4,
      "count": 99
    },
    "priceCents": 2374,
    "keywords": ["kleenex", "tissues", "kitchen", "napkins"]
  },
  {
    "id": "5968897c-4d27-4872-89f6-5bcb052746d7",
    "image": "src/images/products/women-striped-beach-dress.jpg",
    "name": "Women's Striped Beach Dress",
    "rating": {
      "stars": 4.5,
      "count": 235
    },
    "priceCents": 2970,
    "keywords": ["robe", "swimsuit", "swimming", "bathing", "apparel"]
  },
  {
    "id": "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    "image": "src/images/products/women-sandal-heels-white-pink.jpg",
    "name": "Women's Sandal Heels - Pink",
    "rating": {
      "stars": 4.5,
      "count": 2286
    },
    "priceCents": 5300,
    "keywords": ["womens", "shoes", "heels", "sandals"]
  },
  {
    "id": "aad29d11-ea98-41ee-9285-b916638cac4a",
    "image": "src/images/products/round-sunglasses-gold.jpg",
    "name": "Round Sunglasses",
    "rating": {
      "stars": 4.5,
      "count": 30
    },
    "priceCents": 3560,
    "keywords": ["accessories", "shades"]
  },
  {
    "id": "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    "image": "src/images/products/blackout-curtain-set-beige.jpg",
    "name": "Blackout Curtains Set - Beige",
    "rating": {
      "stars": 4.5,
      "count": 232
    },
    "priceCents": 4599,
    "keywords": ["bedroom", "curtains", "home"]
  },
  {
    "id": "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    "image": "src/images/products/women-summer-jean-shorts.jpg",
    "name": "Women's Summer Jean Shorts",
    "rating": {
      "stars": 4,
      "count": 160
    },
    "priceCents": 1699,
    "keywords": ["shorts", "apparel", "womens"]
  },
  {
    "id": "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    "image": "src/images/products/electric-steel-hot-water-kettle-white.jpg",
    "name": "Electric Hot Water Kettle - White",
    "rating": {
      "stars": 5,
      "count": 846
    },
    "priceCents": 5074,
    "keywords": ["water kettle", "appliances", "kitchen"]
  },
  {
    "id": "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    "image": "src/images/products/knit-athletic-sneakers-gray.jpg",
    "name": "Waterproof Knit Athletic Sneakers - Gray",
    "rating": {
      "stars": 4,
      "count": 89
    },
    "priceCents": 5390,
    "keywords": ["shoes", "running shoes", "footwear"]
  },
  {
    "id": "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    "image": "src/images/products/straw-sunhat.jpg",
    "name": "Straw Wide Brim Sun Hat",
    "rating": {
      "stars": 4,
      "count": 215
    },
    "priceCents": 2200,
    "keywords": ["hats", "straw hats", "summer", "apparel"]
  },
  {
    "id": "1c079479-8586-494f-ab53-219325432536",
    "image": "src/images/products/men-athletic-shoes-white.jpg",
    "name": "Men's Athletic Sneaker - White",
    "rating": {
      "stars": 4,
      "count": 229
    },
    "priceCents": 4590,
    "keywords": ["shoes", "running shoes", "footwear", "mens"]
  },
  {
    "id": "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    "image": "src/images/products/men-stretch-wool-sweater-black.jpg",
    "name": "Men's Wool Sweater - Black",
    "rating": {
      "stars": 4.5,
      "count": 2465
    },
    "priceCents": 3374,
    "keywords": ["sweaters", "apparel"]
  },
  {
    "id": "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    "image": "src/images/products/bathroom-mat.jpg",
    "name": "Bathroom Bath Mat 16 x 32 Inch - Grey",
    "rating": {
      "stars": 4.5,
      "count": 119
    },
    "priceCents": 1850,
    "keywords": ["bathmat", "bathroom", "home"]
  },
  {
    "id": "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    "image": "src/images/products/women-knit-ballet-flat-white.jpg",
    "name": "Women's Ballet Flat - White",
    "rating": {
      "stars": 4,
      "count": 326
    },
    "priceCents": 2640,
    "keywords": ["shoes", "flats", "womens", "footwear"]
  },
  {
    "id": "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    "image": "src/images/products/men-golf-polo-t-shirt-gray.jpg",
    "name": "Men's Golf Polo Shirt - Gray",
    "rating": {
      "stars": 4.5,
      "count": 2556
    },
    "priceCents": 1599,
    "keywords": ["tshirts", "shirts", "apparel", "mens"]
  },
  {
    "id": "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    "image": "src/images/products/laundry-detergent-tabs.jpg",
    "name": "Laundry Detergent Tabs, 50 Loads",
    "rating": {
      "stars": 4.5,
      "count": 305
    },
    "priceCents": 2899,
    "keywords": ["bathroom", "cleaning"]
  },
  {
    "id": "e4f64a65-1377-42bc-89a5-e572d19252e2",
    "image": "src/images/products/sky-leaf-branch-earrings.jpg",
    "name": "Sterling Silver Leaf Branch Earrings",
    "rating": {
      "stars": 4.5,
      "count": 52
    },
    "priceCents": 6799,
    "keywords": ["jewelry", "accessories", "womens"]
  },
  {
    "id": "19c6a64a-5463-4d45-9af8-e41140a4100c",
    "image": "src/images/products/duvet-cover-set-gray-queen.jpg",
    "name": "Duvet Cover Set, Diamond Pattern",
    "rating": {
      "stars": 4,
      "count": 456
    },
    "priceCents": 4399,
    "keywords": ["bedroom", "bed sheets", "sheets", "covers", "home"]
  },
  {
    "id": "d2785924-743d-49b3-8f03-ec258e640503",
    "image": "src/images/products/women-knit-beanie-pom-pom-blue.jpg",
    "name": "Women's Knit Winter Beanie - Blue",
    "rating": {
      "stars": 5,
      "count": 83
    },
    "priceCents": 1950,
    "keywords": ["hats", "winter hats", "beanies", "apparel", "womens"]
  },
  {
    "id": "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    "image": "src/images/products/men-chino-pants-beige.jpg",
    "name": "Men's Chino Pants - Beige",
    "rating": {
      "stars": 4.5,
      "count": 9017
    },
    "priceCents": 2290,
    "keywords": ["pants", "apparel", "mens"]
  },
  {
    "id": "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    "image": "src/images/products/men-navigator-sunglasses-black.jpg",
    "name": "Men's Navigator Sunglasses",
    "rating": {
      "stars": 3.5,
      "count": 42
    },
    "priceCents": 3690,
    "keywords": ["sunglasses", "glasses", "accessories", "shades"]
  },
  {
    "id": "04701903-bc79-49c6-bc11-1af7e3651358",
    "image": "src/images/products/men-brown-flat-sneakers.jpg",
    "name": "Men's Brown Flat Sneakers",
    "rating": {
      "stars": 4.5,
      "count": 562
    },
    "priceCents": 2499,
    "keywords": ["footwear", "men", "sneakers"]
  },
  {
    "id": "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    "image": "src/images/products/non-stick-cooking-set-4-pieces.jpg",
    "name": "Non-Stick Cook Set With Lids - 4 Pieces",
    "rating": {
      "stars": 4.5,
      "count": 511
    },
    "priceCents": 6797,
    "keywords": ["cooking set", "kitchen"]
  },
  {
    "id": "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    "image": "src/images/products/vanity-mirror-pink.jpg",
    "name": "Vanity Mirror with LED Lights - Pink",
    "rating": {
      "stars": 4.5,
      "count": 130
    },
    "priceCents": 2549,
    "keywords": ["bathroom", "washroom", "mirrors", "home"]
  },
  {
    "id": "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    "image": "src/images/products/women-relaxed-lounge-pants-pink.jpg",
    "name": "Women's Relaxed Lounge Pants - Pink",
    "rating": {
      "stars": 4.5,
      "count": 248
    },
    "priceCents": 3400,
    "keywords": ["pants", "apparel", "womens"]
  },
  {
    "id": "d339adf3-e004-4c20-a120-40e8874c66cb",
    "image": "src/images/products/crystal-zirconia-stud-earrings-pink.jpg",
    "name": "Crystal Zirconia Stud Earrings - Pink",
    "rating": {
      "stars": 4.5,
      "count": 117
    },
    "priceCents": 3467,
    "keywords": ["accessories", "womens"]
  },
  {
    "id": "d37a651a-d501-483b-aae6-a9659b0757a0",
    "image": "src/images/products/glass-screw-lid-food-containers.jpg",
    "name": "Glass Screw Lid Containers - 3 Pieces",
    "rating": {
      "stars": 4,
      "count": 126
    },
    "priceCents": 2899,
    "keywords": ["food containers", "kitchen"]
  },
  {
    "id": "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    "image": "src/images/products/black-and-silver-espresso-maker.jpg",
    "name": "Black and Silver Espresso Maker",
    "rating": {
      "stars": 4.5,
      "count": 1211
    },
    "priceCents": 8250,
    "keywords": ["espresso makers", "kitchen", "appliances"]
  },
  {
    "id": "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    "image": "src/images/products/blackout-curtains-set-teal.jpg",
    "name": "Blackout Curtains Set 42 x 84-Inch - Teal",
    "rating": {
      "stars": 4.5,
      "count": 363
    },
    "priceCents": 3099,
    "keywords": ["bedroom", "home", "curtains"]
  },
  {
    "id": "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    "image": "src/images/products/bath-towel-set-gray-rosewood.jpg",
    "name": "Bath Towels 2 Pack - Gray, Rosewood",
    "rating": {
      "stars": 4.5,
      "count": 93
    },
    "priceCents": 2990,
    "keywords": ["bathroom", "home", "towels"]
  },
  {
    "id": "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    "image": "src/images/products/athletic-skateboard-shoes-gray.jpg",
    "name": "Athletic Skateboard Shoes - Gray",
    "rating": {
      "stars": 4,
      "count": 89
    },
    "priceCents": 3390,
    "keywords": ["shoes", "running shoes", "footwear"]
  },
  {
    "id": "77a845b1-16ed-4eac-bdf9-5b591882113d",
    "image": "src/images/products/countertop-push-blender-black.jpg",
    "name": "Countertop Push Blender - Black",
    "rating": {
      "stars": 4,
      "count": 3
    },
    "priceCents": 10747,
    "keywords": ["food blenders", "kitchen", "appliances"]
  },
  {
    "id": "bc2847e9-5323-403f-b7cf-57fde044a955",
    "image": "src/images/products/men-cozy-fleece-hoodie-light-teal.jpg",
    "name": "Men's Fleece Hoodie - Light Teal",
    "rating": {
      "stars": 4.5,
      "count": 3157
    },
    "priceCents": 3800,
    "keywords": ["sweaters", "hoodies", "apparel", "mens"]
  },
  {
    "id": "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    "image": "src/images/products/artistic-bowl-set-6-piece.jpg",
    "name": "Artistic Bowl and Plate Set - 6 Pieces",
    "rating": {
      "stars": 5,
      "count": 679
    },
    "priceCents": 3899,
    "keywords": ["bowls set", "kitchen"]
  },
  {
    "id": "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    "image": "src/images/products/kitchen-paper-towels-8-pack.jpg",
    "name": "2-Ply Kitchen Paper Towels - 8 Pack",
    "rating": {
      "stars": 4.5,
      "count": 1045
    },
    "priceCents": 1899,
    "keywords": ["kitchen", "kitchen towels", "tissues"]
  }
]

export default products