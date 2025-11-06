import dotenv from "dotenv";
import { stripe } from "../lib/stripe.js";
import Coupon from "../models/coupon.model.js";

dotenv.config();

export const createCheckoutSession = async(req, res) => {
    try {
        const {products, applyCoupon, couponCode} = req.body;

        
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
                        images: [product.imageUrl],
                    },
                    unit_amount: amount,
                },
                quantity: product.quantity || 1,
            }
        });

        let coupon = null;
        if (applyCoupon && couponCode) {
            coupon = await Coupon.findOne({code: couponCode, userId:req.user, isActive: true});
            if (coupon) {
                totalAmount = Math.round(totalAmount * coupon.discountPercentage / 100);
            }
        };



        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/purchase-cancel`,
            discounts: coupon
            ?   [
                    {
                        coupon: await createStripeCoupon(coupon.discountPercentage),
                    }
                ] 
            : [], metadata: {
                userId: req.user._id.toString(),
                couponCode: couponCode || "",
                products: JSON.stringify(
                    products.map((p) => ({
                        id: p._id,
                        quantity: p.quantity,
                        price: p.price,
                    })),
                ),
            }
        });

        if (totalAmount >= 20000) {
            try {
              await createNewCoupon(req.user._id);
            } catch (err) {
              if (err.code === 11000) {
                console.log("User already has a coupon; skipping creation.");
              } else {
                throw err;
              }
            }
        }

        res.status(200).json({id: session.id,  url: session.url, totalAmount: totalAmount / 100, couponApplied: !!coupon});
        return;

    } catch (error) {
        console.error("Error processing checkout:", error);
        if (!res.headersSent) {
          res.status(500).json({ message: "Error processing checkout", error: error.message });
        };
       
    }
};



async function createStripeCoupon(discountPercentage) {
    const coupon = await stripe.coupons.create({
        percent_off: discountPercentage,
        duration: "once"
    });

    return coupon.id;
};

async function createNewCoupon(userId) {
    const newCoupon = new Coupon({
        code: "GIFT" + Math.random().toString(36).substring(2, 8).toUpperCase(),
        discountPercentage: 10,
        expirationDate: new Date(Date.now() + 30 * 24 * 60 *60 *1000),
        userId:userId,
    })

    await newCoupon.save();

    return newCoupon;
};