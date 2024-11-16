import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addToStoredCartList, addToStoredWishList } from "../../utility/addToDB";
import { useState } from "react"; 




const GadgetDetail = () => {

    const { product_id } = useParams();
    const data = useLoaderData()

    const [isInWishlist, setIsInWishlist] = useState(false); 

    const gadget = data.find(gadget => gadget.product_id === product_id)

    const {product_id: currentProductId, product_title, product_image, price, description, Specification, rating, availability } = gadget;

    const handleAddToCart = (id) =>{
        addToStoredCartList(id);
    }

    const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
        setIsInWishlist(true); 
    }

    return (
        <div className="">
            <div className="mb-96">
                <div className="flex justify-center items-center text-center bg-[#9538E2] mb-4">
                    <div className="pt-12 pb-36">
                        <h1 className="text-3xl font-bold text-white">
                            Product Details
                        </h1>
                        <p className="text-white mt-4">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to<br /> the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[1000px] mx-auto flex justify-between items-center font-sora absolute rounded-3xl border top-72 left-0 right-0 p-8 bg-white">
                <div>
                    <img className="h-[450px] rounded-3xl" src={product_image} alt="" />
                </div>
                <div>
                    <h1 className="font-semibold text-3xl">{product_title}</h1>
                    <p className="mt-2 font-semibold text-xl">Price: ${price}</p>

                    {availability ? (
                        <span className="inline-block border border-[#309C08] bg-green-100 text-[#309C08] text-sm px-3 py-1 rounded-full mt-2 font-medium">
                            In Stock
                        </span>
                    ) : (
                        <span className="inline-block border font-medium border-red-800 bg-red-200 text-red-800 text-sm px-3 py-1 rounded-full mt-2">
                            Out of Stock
                        </span>
                    )}


                    <p className="mt-2">{description}</p>
                    <h2 className="mt-2 font-bold text-lg">Specifications:</h2>
                    <ul className="list-decimal list-inside">
                        {Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <h1 className="mt-2 font-bold text-lg">Rating</h1>
                    <div className="mt-2 flex items-center">
                        <div className="rating mr-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="bg-gray-200 rounded-3xl px-3 py-1">{rating}</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <button onClick={()=> handleAddToCart(product_id)} className="btn bg-[#9538E2] text-white rounded-3xl mr-2">Add to Cart <IoCartOutline /></button>
                        <button onClick={()=> handleAddToWishList(product_id)} disabled={isInWishlist} className="btn rounded-full">
                            <CiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;




