
const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
            <div className="bg-white shadow-md rounded-2xl p-8 max-w-3xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    About <span className="text-[#9538E2]">GadgetHeaven</span>
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Welcome to <span className="font-semibold">GadgetHeaven</span> – your one-stop shop for the latest and greatest gadgets! Explore our wide range of products, including smartphones, smartwatches, chargers, and more. Our platform is designed to provide an easy and enjoyable shopping experience.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Wide range of gadgets with detailed specifications.</li>
                    <li>Easy filtering and sorting by price and category.</li>
                    <li>Wishlist and cart management with Context API.</li>
                    <li>Special deals on selected items.</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
                <form className="bg-gray-50 shadow-inner rounded-2xl p-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#9538E2] text-white font-bold py-2 px-4 rounded-2xl"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default About;