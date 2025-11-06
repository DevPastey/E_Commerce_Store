import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "../stores/useCartStore";
import axiosInstance from "../lib/axios";

const PurchaseSuccessPage = () => {
    const [isProcessing, setIsProcessing] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const hasCleared = useRef(false);

    const {clearCart} = useCartStore();

    useEffect(() => {

        const handleCheckoutSession = async(sessionId: string) => {
            try {
                axiosInstance.post("/payment/checkout-success", {sessionId});
                clearCart();
            } catch (error) {
                console.log(error)
            } finally {
                setIsProcessing(false);
            }
        };
        
        const sessionId = new URLSearchParams(window.location.search).get("session_id");
        if (sessionId) {
            handleCheckoutSession(sessionId);
        }else{
            setIsProcessing(false);
            setError("No session ID found in the URL");
        }
        
    }, [clearCart]);

    if (isProcessing) return "Processing...";

    if (error) return `Error: ${error}`;

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="bg-gray-800 max-w-md w-full shadow-xl rounded-lg overflow-hidden relative z-10">
            <div  
                // initial={{ opacity:0, y: 20 }}
                // animate={{ opacity:1, y: 0 }}
                // transition={{ duration: 0.8,  delay:0.9, ease: easeInOut}}

                className="p-6 sm:p-8 "
            >
                <motion.div className="flex justify-center"
                   initial={{ opacity:0, x: -20 }}
                   animate={{ opacity:1, x: 0 }}
                   transition={{ duration: 0.8, ease: easeInOut}} 
                >
                    <CheckCircle className="text-primary-green w-16 h-16 mb-4"/>
                </motion.div>

                <motion.div className="flex flex-col justify-center"
                   initial={{ opacity:0, y: 20 }}
                   animate={{ opacity:1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.3, ease: easeInOut}} 
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-primary-green mb-2">
                        Purchase Successful!
                    </h1>

                    <p className="text-gray-300 text-center mb-2">
                        Thank you for your order. {"we're"} processing it now.
                    </p>

                    <p className="text-primary-green text-center text-sm mb-6">
                        check your email for order details and updates.
                    </p>

                    {/* TODO - Integregate order details update via email */}

                    <div className='bg-gray-700 rounded-lg p-4 mb-6'>
                        <div className='flex items-center justify-between mb-2'>
                            <span className='text-sm text-gray-400'>Order number</span>
                            <span className='text-sm font-semibold text-emerald-400'>#12345</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-gray-400'>Estimated delivery</span>
                            <span className='text-sm font-semibold text-emerald-400'>3-5 business days</span>
                        </div>
                    </div>

                    
                </motion.div>

                <div className='space-y-4'>
                    <motion.div
                        
                        initial={{ opacity:0, y:10 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: easeInOut}}
                    >
                        <button
                            className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4
                            rounded-lg transition duration-300 flex items-center justify-center'
                        >
                            <HandHeart className='mr-2' size={18} />
                            Thanks for trusting us!
                        </button>

                    </motion.div>

                    <motion.div
                        initial={{ opacity:0, y:10}}
                        animate={{ opacity:1, y:0}}
                        transition={{ duration: 0.8, delay: 0.7, ease: easeInOut}}
                    >
                        <Link
                            to={"/"}
                            className='w-full bg-gray-700 hover:bg-gray-600 text-emerald-400 font-bold py-2 px-4 
                            rounded-lg transition duration-300 flex items-center justify-center'
                        >
                            Continue Shopping
                            <ArrowRight className='ml-2' size={18} />
                        </Link>
                    </motion.div>
                </div>

                
            </div>
      </div>
    </div>
  )
}

export default PurchaseSuccessPage
