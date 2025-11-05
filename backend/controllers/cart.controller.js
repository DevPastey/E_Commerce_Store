import Product from "../models/product.model.js";


export const getCartProducts = async (req, res) => {
  try {
    const userCart = req.user.cartItems || [];

    if (userCart.length === 0) return res.json([]);

    // Fetch all products in user's cart
    const productIds = userCart.map((item) => item.product);
    const products = await Product.find({ _id: { $in: productIds } });

    // Merge with quantities
    const cartItems = products.map((product) => {
      const cartItem = userCart.find(
        (item) => String(item.product) === String(product._id)
      );
      return {
        ...product.toJSON(),
        quantity: cartItem?.quantity || 1,
      };
    });

    res.json(cartItems);
  } catch (error) {
    console.error("Error in getCartProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    const existingItem = user.cartItems.find(
      (item) => String(item.product) === String(productId)
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cartItems.push({ product: productId, quantity: 1 });
    }

    await user.save();

    res.json(user.cartItems);
  } catch (error) {
    console.error("Error in addToCart controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



export const removeAllFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;

    if (!productId) {
      user.cartItems = [];
    } else {
      user.cartItems = user.cartItems.filter(
        (item) => String(item.product) !== String(productId)
      );
    }

    await user.save();
    res.json(user.cartItems);
  } catch (error) {
    console.error("Error in removeAllFromCart controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




export const updateQuantity = async (req, res) => {
  try {
    const { id: productId, quantity } = req.body;
    const user = req.user;

    const existingItem = user.cartItems.find(
      (item) => String(item.product) === String(productId)
    );

    if (!existingItem) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    if (quantity === 0) {
      user.cartItems = user.cartItems.filter(
        (item) => String(item.product) !== String(productId)
      );
    } else {
      existingItem.quantity = quantity;
    }

    await user.save();
    res.json(user.cartItems);
  } catch (error) {
    console.error("Error in updateQuantity controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
