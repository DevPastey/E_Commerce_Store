import stripe from "../lib/stripe.js";
import Coupon from "../models/coupon.model";

export const createCheckoutSession = async(req, res) => {
    try {
        const {products, couponCode} = req.body;
        if (!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({error: "Invalid or empty products array"});
        };

        let totalAmount = 0;

        const lineItems = products.map(product => {
            const amount = Math.round(product.price * 100) //  stripe recieves in cents
            totalAmount += amount * product.quantity;

            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: amount,
                }
            }
        });

        let coupon = null;
        if (couponCode) {
            coupon = await Coupon.findOne({code: couponCode, userId:req.user, isActive: true});
            if (coupon) {
                totalAmount = Math.round(totalAmount * coupon.discountPercentage / 100);
            }
        };


        const session = await stripe
    } catch (error) {
        
    }
}