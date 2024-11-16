
const Footer = () => {
    return (
        <footer className="footer mt-32 bg-white text-[#09080F] p-10 text-center flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="mt-4">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="border w-[1280px]"></div>
            <div className="flex gap-44">
                <nav className="flex flex-col gap-2">
                    <h6 className="font-bold text-lg text-[#09080F]">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="font-bold text-lg text-[#09080F]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="font-bold text-lg text-[#09080F]">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;