import { stripe } from "../lib/stripe.js";
import Order from "../models/order.model.js";

export const checkoutSucess = async(req, res) => {
    try {
        const {sessionId} = req.body;
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.payment_status === "paid") {
            if (session.metadata.couponCode) {
                await Coupon.findOneAndUpdate({
                    code: session.metadata.couponCode, userId: session.metadata.userId
                },{
                    isActive: false,
                })
            }

            //create a new order
            const products = JSON.parse(session.metadata.products);
            const newOrder = new Order({
                session: session.metadata.userId,
                products: products.map(product => ({
                    product: product.id,
                    quantity: product.quantity,
                    price: product.price,
                })),
                totalAmount: session.amount_total / 100,  //convert from cents to Dollars
                stripeSessionId: sessionId,
            })
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