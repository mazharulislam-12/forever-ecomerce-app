import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProuct from '../components/RelatedProuct';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    const fetchProductData = async () => {
        products.forEach((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
            }
        });
    };

    // Fetch reviews from localStorage on component mount
    useEffect(() => {
        const savedReviews = JSON.parse(localStorage.getItem(`reviews-${productId}`));
        if (savedReviews) {
            setReviews(savedReviews);
        }
    }, [productId]);

    const handleReviewSubmit = () => {
        if (reviewText) {
            const newReviews = [...reviews, reviewText];
            setReviews(newReviews);
            setReviewText('');
            localStorage.setItem(`reviews-${productId}`, JSON.stringify(newReviews)); // Save to localStorage
        }
    };

    const applyCoupon = () => {
        if (couponCode === "DISCOUNT20" || couponCode === "Moulvibazar") {
            setDiscount(0.20);
            alert("Coupon applied! You get a 20% discount.");
        } else {
            alert("Invalid coupon code.");
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [productId]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in-out opacity-100'>
            {/* product data */}
            <div className='flex flex-col sm:flex-row gap-6'>
                {/* product images */}
                <div className='flex-shrink-0 flex flex-col gap-2'>
                    {productData.image.map((item, index) => (
                        <img
                            key={index}
                            onClick={() => setImage(item)}
                            src={item}
                            className='w-[80px] cursor-pointer'
                            alt=""
                        />
                    ))}
                </div>

                {/* main image */}
                <div>
                    <img className='w-[500px] h-auto' src={image} alt="" />
                </div>

                {/* product information */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                        <p className='pl-2'>({reviews.length})</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>
                        {currency} {(productData.price * (1 - discount)).toFixed(2)}
                    </p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>

                    {/* Coupon code input */}
                    <div className='mt-5'>
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className='border p-2 text-sm w-3/5 mr-2'
                        />
                        <button onClick={applyCoupon} className='bg-black text-white px-4 py-2'>Apply Coupon</button>
                    </div>

                    <hr className='mt-8 sm:w-4/5 ' />

                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* description and Review section */}
            <div className='mt-20'>
                <div className='flex'>
                    <button
                        onClick={() => setActiveTab('description')}
                        className={`border px-5 py-3 text-sm ${activeTab === 'description' ? 'font-bold' : ''}`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`border px-5 py-3 text-sm ${activeTab === 'reviews' ? 'font-bold' : ''}`}
                    >
                        Reviews ({reviews.length})
                    </button>
                </div>

                {activeTab === 'description' ? (
                    <div className='border px-6 py-6 text-sm text-gray-500'>
                        <p>{productData.description}</p>
                    </div>
                ) : (
                    <div className='border px-6 py-6 text-sm text-gray-500'>
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className='border p-3 rounded-md mb-3 bg-gray-50'>
                                    <p>{review}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div>
                )}

                {/* Review input */}
                {activeTab === 'reviews' && (
                    <div className='border p-4 mt-5'>
                        <textarea
                            rows="3"
                            placeholder="Write your review here..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            className='border w-full p-2 text-sm'
                        />
                        <button onClick={handleReviewSubmit} className='bg-black text-white px-4 py-2 mt-2'>Submit Review</button>
                    </div>
                )}
            </div>

            {/* display related products */}
            <RelatedProuct category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : <div className='opacity-0'></div>;
};

export default Product;
