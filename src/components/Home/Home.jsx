import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        document.title = "Home - Your Gadgets Store";
    }, []);

    return (
        <div className="bg-gray-100 pb-32">
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;