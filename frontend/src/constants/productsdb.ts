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
//   {
//     name: "Classic Navy Suit",
//     description: "Tailored navy blue suit with a modern slim fit.",
//     price: 349.99,
//     category: "suits",
//     countInStock: 20,
//     imageUrl: "https://images.unsplash.com/photo-1520975918319-85f146be9f5d"
//   },
//   {
//     name: "Charcoal Business Suit",
//     description: "Elegant charcoal gray suit designed for business professionals.",
//     price: 389.99,
//     category: "suits",
//     countInStock: 15,
//     imageUrl: "https://images.unsplash.com/photo-1588359543954-67d5a2c3e18b"
//   },
//   {
//     name: "Beige Summer Suit",
//     description: "Lightweight beige linen suit ideal for warm weather.",
//     price: 299.99,
//     category: "suits",
//     countInStock: 12,
//     imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3b1f"
//   },
//   {
//     name: "Black Tuxedo Suit",
//     description: "Premium black tuxedo with satin lapels for formal events.",
//     price: 499.99,
//     category: "suits",
//     countInStock: 10,
//     imageUrl: "https://images.unsplash.com/photo-1551022372-0bd33f51d42a"
//   },
//   {
//     name: "Light Gray Suit",
//     description: "Soft light gray slim-fit suit perfect for weddings and celebrations.",
//     price: 329.99,
//     category: "suits",
//     countInStock: 18,
//     imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
//   },
//   {
//     name: "Slim Fit Blue Jeans",
//     description: "Classic slim fit denim jeans with stretch for everyday comfort.",
//     price: 64.99,
//     category: "jeans",
//     countInStock: 45,
//     imageUrl: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1"
//   },
//   {
//     name: "Black Straight-Leg Jeans",
//     description: "Timeless straight-leg jeans in deep washed black denim.",
//     price: 72.50,
//     category: "jeans",
//     countInStock: 30,
//     imageUrl: "https://images.unsplash.com/photo-1583002350928-e6e5bba9da7f"
//   },
//   {
//     name: "Vintage Blue Baggy Jeans",
//     description: "Loose-fit baggy jeans with a retro streetwear look.",
//     price: 79.00,
//     category: "jeans",
//     countInStock: 20,
//     imageUrl: "https://images.unsplash.com/photo-1582554252191-1b6a3c49ca7c"
//   },
//   {
//     name: "Distressed Ripped Jeans",
//     description: "Light-wash denim with knee rips for a modern rugged look.",
//     price: 89.99,
//     category: "jeans",
//     countInStock: 28,
//     imageUrl: "https://images.unsplash.com/photo-1592878849125-38a4dd3a1572"
//   },
//   {
//     name: "Dark Wash Skinny Jeans",
//     description: "Body-hugging skinny jeans in a premium dark wash finish.",
//     price: 67.25,
//     category: "jeans",
//     countInStock: 55,
//     imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531"
//   },
//   // ... continue with the rest of the 60+ products
// ];



// export const productsDB = [
//   // T-Shirts (10)
//   {
//     name: "Urban Oversized T-Shirt",
//     description: "Comfortable oversized t-shirt made from premium cotton.",
//     price: 45.99,
//     category: "t-shirt",
//     countInStock: 35,
//     imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
//   },
//   {
//     name: "Minimalist White Tee",
//     description: "Soft everyday white t-shirt with a clean modern fit.",
//     price: 29.99,
//     category: "t-shirt",
//     countInStock: 50,
//     imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
//   },
//   {
//     name: "Streetwear Graphic Tee",
//     description: "Bold graphic t-shirt for a street fashion look.",
//     price: 38.50,
//     category: "t-shirt",
//     countInStock: 25,
//     imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
//   },
//   {
//     name: "Classic Black Tee",
//     description: "Timeless black t-shirt, perfect for any outfit combo.",
//     price: 32.00,
//     category: "t-shirt",
//     countInStock: 60,
//     imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
//   },
//   {
//     name: "Vintage Wash Tee",
//     description: "Retro-style washed tee with relaxed fit.",
//     price: 41.25,
//     category: "t-shirt",
//     countInStock: 27,
//     imageUrl: "https://images.unsplash.com/photo-1530089713900-4cd2c6b2a027"
//   },
//   {
//     name: "Beige Cotton Tee",
//     description: "Neutral soft-tone t-shirt perfect for minimal outfits.",
//     price: 34.10,
//     category: "t-shirt",
//     countInStock: 40,
//     imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4b5b8b3"
//   },
//   {
//     name: "Navy Crewneck Tee",
//     description: "Classic navy crewneck tee for everyday wear.",
//     price: 36.80,
//     category: "t-shirt",
//     countInStock: 48,
//     imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985"
//   },
//   {
//     name: "Athletic Fit Tee",
//     description: "Stretchable sports-fit t-shirt for daily training.",
//     price: 39.90,
//     category: "t-shirt",
//     countInStock: 38,
//     imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f38438af"
//   },
//   {
//     name: "Earth Tone Tee",
//     description: "Breathable earth-tone tee for warm weather.",
//     price: 33.50,
//     category: "t-shirt",
//     countInStock: 44,
//     imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d"
//   },
//   {
//     name: "Premium Bamboo Tee",
//     description: "Eco-friendly ultra-soft bamboo fabric t-shirt.",
//     price: 54.99,
//     category: "t-shirt",
//     countInStock: 29,
//     imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
//   },

//   // Suits (10)
//   {
//     name: "Classic Black Suit",
//     description: "Timeless slim-fit black suit for all events.",
//     price: 249.99,
//     category: "suits",
//     countInStock: 15,
//     imageUrl: "https://images.unsplash.com/photo-1520975918319-6109237a8e8b"
//   },
//   {
//     name: "Navy Blue Business Suit",
//     description: "Premium navy suit with structured shoulders.",
//     price: 289.50,
//     category: "suits",
//     countInStock: 20,
//     imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
//   },
//   {
//     name: "Grey Corporate Suit",
//     description: "Light grey professional suit for office settings.",
//     price: 270.20,
//     category: "suits",
//     countInStock: 12,
//     imageUrl: "https://images.unsplash.com/photo-1528873981-7032b2c7bbf4"
//   },
//   {
//     name: "White Tuxedo",
//     description: "Luxury white tuxedo for premium occasions.",
//     price: 359.99,
//     category: "suits",
//     countInStock: 8,
//     imageUrl: "https://images.unsplash.com/photo-1562158070-57de13e76b98"
//   },
//   {
//     name: "Charcoal Slim Suit",
//     description: "Sleek charcoal suit with clean tailoring.",
//     price: 260.75,
//     category: "suits",
//     countInStock: 18,
//     imageUrl: "https://images.unsplash.com/photo-1593032457862-7dc1cead1d8b"
//   },
//   {
//     name: "Beige Elegant Suit",
//     description: "Light beige designer suit for casual formal vibes.",
//     price: 299.99,
//     category: "suits",
//     countInStock: 10,
//     imageUrl: "https://images.unsplash.com/photo-1520975698519-59a3e0b08ba9"
//   },
//   {
//     name: "Double Breasted Suit",
//     description: "Old-money style double breasted luxury suit.",
//     price: 329.40,
//     category: "suits",
//     countInStock: 9,
//     imageUrl: "https://images.unsplash.com/photo-1520975907854-6cbb994dd108"
//   },
//   {
//     name: "Brown Vintage Suit",
//     description: "Retro brown suit for classic gentlemen’s look.",
//     price: 244.00,
//     category: "suits",
//     countInStock: 14,
//     imageUrl: "https://images.unsplash.com/photo-1520975922532-2317571daf29"
//   },
//   {
//     name: "Royal Blue Wedding Suit",
//     description: "Rich royal-blue suit ideal for ceremonies.",
//     price: 310.99,
//     category: "suits",
//     countInStock: 11,
//     imageUrl: "https://images.unsplash.com/photo-1520975482316-46b248aa69a3"
//   },
//   {
//     name: "Cream Luxury Suit",
//     description: "Cream-tone premium suit for elegant styling.",
//     price: 333.33,
//     category: "suits",
//     countInStock: 7,
//     imageUrl: "https://images.unsplash.com/photo-1520975893571-ef2e0f973e1f"
//   },
//   {
//     name: "Charcoal Business Suit",
//     description: "Elegant charcoal gray suit designed for business professionals.",
//     price: 389.99,
//     category: "suits",
//     countInStock: 15,
//     imageUrl: "https://images.unsplash.com/photo-1588359543954-67d5a2c3e18b"
//   },
//   {
//     name: "Beige Summer Suit",
//     description: "Lightweight beige linen suit ideal for warm weather.",
//     price: 299.99,
//     category: "suits",
//     countInStock: 12,
//     imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3b1f"
//   },
//   {
//     name: "Black Tuxedo Suit",
//     description: "Premium black tuxedo with satin lapels for formal events.",
//     price: 499.99,
//     category: "suits",
//     countInStock: 10,
//     imageUrl: "https://images.unsplash.com/photo-1551022372-0bd33f51d42a"
//   },
//   {
//     name: "Light Gray Suit",
//     description: "Soft light gray slim-fit suit perfect for weddings and celebrations.",
//     price: 329.99,
//     category: "suits",
//     countInStock: 18,
//     imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
//   },
//   {
//     name: "Slim Fit Blue Jeans",
//     description: "Classic slim fit denim jeans with stretch for everyday comfort.",
//     price: 64.99,
//     category: "jeans",
//     countInStock: 45,
//     imageUrl: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1"
//   },
//   {
//     name: "Black Straight-Leg Jeans",
//     description: "Timeless straight-leg jeans in deep washed black denim.",
//     price: 72.50,
//     category: "jeans",
//     countInStock: 30,
//     imageUrl: "https://images.unsplash.com/photo-1583002350928-e6e5bba9da7f"
//   },
//   {
//     name: "Vintage Blue Baggy Jeans",
//     description: "Loose-fit baggy jeans with a retro streetwear look.",
//     price: 79.00,
//     category: "jeans",
//     countInStock: 20,
//     imageUrl: "https://images.unsplash.com/photo-1582554252191-1b6a3c49ca7c"
//   },
//   {
//     name: "Distressed Ripped Jeans",
//     description: "Light-wash denim with knee rips for a modern rugged look.",
//     price: 89.99,
//     category: "jeans",
//     countInStock: 28,
//     imageUrl: "https://images.unsplash.com/photo-1592878849125-38a4dd3a1572"
//   },
//   {
//     name: "Dark Wash Skinny Jeans",
//     description: "Body-hugging skinny jeans in a premium dark wash finish.",
//     price: 67.25,
//     category: "jeans",
//     countInStock: 55,
//     imageUrl: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531"
//   },
// ];


export const productsDB =  [
  {
    name: "Urban Oversized Tee",
    description: "Oversized cotton tee with a streetwear fit.",
    price: 32.99,
    category: "t-shirt",
    countInStock: 50,
    imageUrl: "https://images.unsplash.com/photo-1520975918318-3ec6f9f1f8ec"
  },
  {
    name: "Minimalist White Tee",
    description: "Soft premium cotton white t-shirt for everyday wear.",
    price: 24.50,
    category: "t-shirt",
    countInStock: 120,
    imageUrl: "https://images.unsplash.com/photo-1602810316498-d3b3e0d6044a"
  },
  {
    name: "Vintage Washed Tee",
    description: "Relaxed vintage-style washed t-shirt with faded look.",
    price: 29.90,
    category: "t-shirt",
    countInStock: 75,
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    name: "Graphic Street Print Tee",
    description: "Bold graphic printed tee for urban style.",
    price: 34.99,
    category: "t-shirt",
    countInStock: 60,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Classic Black Crew Neck Tee",
    description: "Timeless black crew neck t-shirt.",
    price: 22.49,
    category: "t-shirt",
    countInStock: 100,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    name: "Retro Logo Tee",
    description: "Branded retro-style logo t-shirt.",
    price: 27.99,
    category: "t-shirt",
    countInStock: 80,
    imageUrl: "https://images.unsplash.com/photo-1555529907-678dfc73683d"
  },
  {
    name: "Earth Tone Tee",
    description: "Neutral tone premium tee for minimalist style.",
    price: 26.75,
    category: "t-shirt",
    countInStock: 90,
    imageUrl: "https://images.unsplash.com/photo-1523528283115-9bf9ce52ce5c"
  },
  {
    name: "Athletic Fit Performance Tee",
    description: "Breathable stretch tee designed for active comfort.",
    price: 31.50,
    category: "t-shirt",
    countInStock: 65,
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba8"
  },
  {
    name: "Soft Beige Cotton Tee",
    description: "Comfort-fit beige cotton tee for relaxed outfits.",
    price: 23.60,
    category: "t-shirt",
    countInStock: 95,
    imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba8"
  },
  {
    name: "Monochrome Street Tee",
    description: "Modern monochrome tee — clean and stylish.",
    price: 33.10,
    category: "t-shirt",
    countInStock: 55,
    imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c4c3fa0b"
  }
];