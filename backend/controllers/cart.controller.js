import Product from "../models/product.model.js";

export const getCartProducts = async (req, res) => {
    try {
        const products = await Product.find({_id:{$in:req.user.cartItems}});
        
        //add quantiuty of each product
        const cartItems = products.map(product => {
            const item = req.user.cartItems.find(cartItems => cartItems.id === product.id);
            return {...product.toJSON(), quantity: item.quantity};
        });

        res.json(cartItems);

    } catch (error) {
        console.log("Error in getCartProducts controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const addToCart = async (req, res) => {
	try {
		const { productId } = req.body;
		const user = req.user;

        // console.log("user:", user);
        // console.log("ProductId:", productId);
        
        // res.json({Cart: user, productId: productId});

		const existingItem = user.cartItems.find((item) => item.product === productId);
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			user.cartItems.push({product: productId});
		}

        console.log(user)

		await user.save();
		res.json(user.cartItems);

	} catch (error) {
		console.log("Error in addToCart controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};


// export const addToCart = async (req, res) => {
//     try {
//       const { productId } = req.body;
//       const user = req.user;
  
//       if (!productId) {
//         return res.status(400).json({ message: "Product ID is required" });
//       }
  
//       // Check if the product already exists in the user's cart
//       const existingItem = user.cartItems.find(
//         (item) => item.product === productId
//       );
  
//       if (existingItem) {
//         // If product already in cart, increase quantity
//         existingItem.quantity += 1;
//       } else {
//         // Otherwise, push a new product object with quantity 1
//         user.cartItems.push({ product: productId, quantity: 1 });
//       }
  
//       await user.save();
  
//       // Optionally populate product details before returning
//       const populatedUser = await user.populate("cartItems.product");
  
//       res.json(populatedUser.cartItems);
  
//     } catch (error) {
//       console.error("Error in addToCart controller:", error);
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

export const removeAllFromCart = async (req, res) => {
    try {
        const {productId} = req.body;
        const user = req.user;

        if (!productId) {
            user.cartItems = [];
        }else{
            user.cartItems = user.cartItems.filter((item) => item.id !== productId)
        }

        await user.save();
        res.json(user.cartItems);
    } catch (error) {
        console.log("Error in removeAllFromCart controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const {id: productId} = req.body;
        const {quantity} = req.body;
        const user = req.user;

        const existingItem = user.cartItems.find((item => item.id === productId));

        if (existingItem) {
            if(quantity = 0){
                user.cartItems.filter((item) => item.id !== productId);
                await user.save();
                return res.json(user.cartItems)
            }

            existingItem.quantity = quantity;
            await user.save();
            res.json(user.cartItems);
        }else{
            res.status(404).json({message: "Product Not found"});
        }

    } catch (error) {
        console.log("Error in updateQuantity controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}