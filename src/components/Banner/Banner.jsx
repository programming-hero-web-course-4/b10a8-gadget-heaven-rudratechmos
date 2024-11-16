import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="relative text-white text-center mb-96 w-11/12 mx-auto">
            <div className="bg-[#9538E2] rounded-b-3xl pt-12 pb-32">
                <div className="z-10">
                    <h1 className="text-5xl font-bold leading-tight">
                        Upgrade Your Tech Accessorize with<br /> Gadget Heaven Accessories
                    </h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to
                        <br /> the coolest accessories, we have it all!
                    </p>
                    <button className="text-xl font-bold bg-white text-[#9538E2] rounded-3xl px-6 py-2 shadow-md hover:bg-[#D3A1E8]">
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="relative flex justify-center">
                <img
                    src={bannerImg}
                    className="absolute top-[-100px] w-[800px] max-h-[450px] rounded-3xl shadow-lg z-20"
                    style={{
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "8px solid rgba(255, 255, 255, 0.4)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
                    }}
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Banner;








