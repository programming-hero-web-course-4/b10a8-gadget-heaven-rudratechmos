import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate  } from 'react-router-dom';
import { getStoredCartList } from '../../utility/addToDB';
import { getStoredWishList } from '../../utility/addToDB';
import { RxCrossCircled } from "react-icons/rx";
import modalImg from '../../assets/Group.png'



const Dashboard = () => {

    const [cartList, setCartList] = useState([])
    const [wishList, setWishList] = useState([])
    const [isSortedAsc, setIsSortedAsc] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate();


    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList(); 
        console.log('Stored Cart List:', storedCartList);

        if (storedCartList?.length > 0 && allGadgets?.length > 0) {
            const addCartList = allGadgets.filter(gadget =>
                storedCartList.includes(gadget.product_id.toString())
            );
            console.log('Filtered Cart List:', addCartList);
            setCartList(addCartList);
        } else {
            console.warn('Cart is empty or gadgets are not loaded.');
        }
    }, [allGadgets]);

    useEffect(() => {
        const storedWishList = getStoredWishList(); 
        console.log('Stored Wish List:', storedWishList);

        if (storedWishList?.length > 0 && allGadgets?.length > 0) {
            const addWishList = allGadgets.filter(gadget =>
                storedWishList.includes(gadget.product_id.toString())
            );
            console.log('Filtered Cart List:', addWishList);
            setWishList(addWishList);
        } else {
            console.warn('Cart is empty or gadgets are not loaded.');
        }
    }, [allGadgets]);

    const totalCost = cartList.reduce((sum, gadget) => sum + gadget.price, 0);

    const handleRemoveItem = (productId) => {
        const updatedCartList = cartList.filter(gadget => gadget.product_id !== productId);
        setCartList(updatedCartList);
        localStorage.setItem('cartList', JSON.stringify(updatedCartList));
    };
    const handleRemoveItem2 = (productId) => {
        const updatedWishList = wishList.filter(gadget => gadget.product_id !== productId);
        setWishList(updatedWishList);
        localStorage.setItem('cartList', JSON.stringify(updatedWishList));
    };

    const handleSortByPrice = () => {
        const sortedCartList = [...cartList].sort((a, b) => {
            if (isSortedAsc) {
                return a.price - b.price;
            } else {
                return b.price - a.price; 
            }
        });
        setCartList(sortedCartList);
        setIsSortedAsc(!isSortedAsc); 
    };

    const handlePurchase = () => {
        setModalTotalCost(totalCost); 
        setIsModalOpen(true); 
        localStorage.removeItem('cartList');
        setCartList([]); 
    };

    const [modalTotalCost, setModalTotalCost] = useState(0);

    const handleCloseModal = () => {
        setIsModalOpen(false); 
        navigate('/'); 
    };


    const [activeTab, setActiveTab] = useState('cart');

    useEffect(() => {
        document.title = "Dashboard - Your Gadgets Store";
    }, []);

    return (
        <div className='bg-gray-100'>
            <div className="flex justify-center items-center text-center bg-[#9538E2]">
                <div className="py-8">
                    <h1 className="text-3xl font-bold text-white">
                        Dashboard
                    </h1>
                    <p className="text-white mt-4">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to<br /> the coolest accessories, we have it all!
                    </p>

                    <div className="flex gap-4 justify-center items-center mt-6">
                        <button
                            onClick={() => setActiveTab('cart')} 
                            className={`btn rounded-3xl px-12 ${activeTab === 'cart' ? 'bg-white text-[#9538E2] font-extrabold' : 'bg-[#9538E2] text-white'}`}
                        >
                            Cart
                        </button>
                        <button
                            onClick={() => setActiveTab('wishlist')} 
                            className={`btn rounded-3xl px-12 ${activeTab === 'wishlist' ? 'bg-white text-[#9538E2] font-extrabold' : 'bg-[#9538E2] text-white'}`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto mt-8 p-4">
                {activeTab === 'cart' ? (
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-2xl'>Cart</h1>
                            <div className='flex items-center gap-4'>
                                <h1 className='font-bold text-2xl'>Total Cost: {totalCost}</h1>
                                <button onClick={handleSortByPrice} className='btn px-8 rounded-3xl border-[#9538E2] text-[#9538E2]'>Sort by Price {isSortedAsc ? '(Asc)' : '(Desc)'}</button>
                                <button onClick={handlePurchase}
                                    disabled={totalCost === 0 || cartList.length === 0} className='btn px-8 rounded-3xl bg-[#9538E2] text-white'>Purchase</button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 mt-6'>
                            {cartList.map(gadget => (
                                <div key={gadget.product_id} className="flex items-center justify-between bg-white rounded-2xl h-[220px]">
                                    <div className="w-1/4">
                                        <img src={gadget.product_image} alt={gadget.product_title} className="w-auto h-[190px] rounded-lg" />
                                    </div>

                                    <div className="flex flex-col w-3/4 pl-4">
                                        <div className='flex justify-between items-center'>
                                            <h2 className="text-2xl font-semibold">{gadget.product_title}</h2>
                                            <button
                                                onClick={() => handleRemoveItem(gadget.product_id)}
                                                className="text-[#FF0000] text-3xl mr-8"
                                            >
                                                <RxCrossCircled />
                                            </button>
                                        </div>
                                        <p className="text-lg text-gray-600 mt-4 ">{gadget.description}</p>
                                        <p className="text-xl font-semibold mt-4">Price: ${gadget.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold">WishList</h2>
                        <div className='flex flex-col gap-4 mt-6'>
                            {wishList.map(gadget => (
                                <div key={gadget.product_id} className="flex items-center justify-between bg-white rounded-2xl h-[220px]">
                                    <div className="w-1/4">
                                        <img src={gadget.product_image} alt={gadget.product_title} className="w-auto h-[190px] rounded-lg" />
                                    </div>

                                    <div className="flex flex-col w-3/4 pl-4">
                                        <div className='flex justify-between items-center'>
                                            <h2 className="text-2xl font-semibold">{gadget.product_title}</h2>
                                            <button
                                                onClick={() => handleRemoveItem2(gadget.product_id)}
                                                className="text-[#FF0000] text-3xl mr-8"
                                            >
                                                <RxCrossCircled />
                                            </button>
                                        </div>
                                        <p className="text-lg text-gray-600 mt-4 ">{gadget.description}</p>
                                        <p className="text-xl font-semibold mt-4">Price: ${gadget.price}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-3xl p-8 flex flex-col justify-center items-center">
                        <img src={modalImg} alt="" />
                        <h2 className="text-2xl font-bold mt-4">Payment Successfully</h2>
                        <div className='mt-4 w-[280px] border border-b-1 border-gray-200'></div>
                        <p className="font-medium text-gray-600 mt-4">Thanks for purchasing.</p>
                        <p className='font-medium mt-2 text-gray-600'>Total: {modalTotalCost}</p>
                        <button onClick={handleCloseModal} className="btn mt-4 bg-gray-300 px-32 py-2 rounded-3xl font-bold">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

