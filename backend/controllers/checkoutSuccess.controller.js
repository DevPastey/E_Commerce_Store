import { stripe } from "../lib/stripe.js";
import Coupon from "../models/coupon.model.js";
import Order from "../models/order.model.js";

export const checkoutSuccess = async(req, res) => {
    try {
        const { sessionId } = req.body;
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.payment_status === "paid") {

            // 1️⃣ Check if order already exists (avoid duplicates)
            const existingOrder = await Order.findOne({ stripeSessionId: sessionId });
            if (existingOrder) {
              return res.status(200).json({
                success: true,
                message: "Order already exists for this session.",
                orderId: existingOrder._id,
              });
            }

            //Deactivate Coupon
            if (session.metadata?.couponCode) {
                await Coupon.findOneAndUpdate({
                    code: session.metadata.couponCode, userId: session.metadata.userId
                },{
                    isActive: false,
                });
            }


            //Extract and validate metadata
            const products = JSON.parse(session.metadata.products || "[]");

            if (!session.metadata.userId) {
                throw new Error("Missing userId in session metadata");
            };

            if (!products.length) {
                throw new Error("No products found in session metadata");
            };


            // Create the order with valid ObjectIds
            const formattedProducts = products.map((product) => ({
              product: product._id || product.id, // handle both cases
              quantity: product.quantity,
              price: product.price,
            }));

            //create a new order

            const newOrder = new Order({
                user: session.metadata.userId,
                products: formattedProducts,
                totalAmount: session.amount_total / 100, // convert cents → dollars
                stripeSessionId: sessionId,
              });

            await newOrder.save();

            res.status(200).json({
                success: true,
                message: "Payment Successful, order created, and coupon deactivated if used.",
                orderId: newOrder._id,
            });
        } 
    } catch (error) {
        console.error("Error processing successful checkout:", error);
        res.status(500).json({ message: "Error processing successful checkout", error:error.message})
    }
}