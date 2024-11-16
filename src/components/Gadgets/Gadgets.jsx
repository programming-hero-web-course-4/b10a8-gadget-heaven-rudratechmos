import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All Product");

    useEffect(() => {
        fetch('/gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    const filteredGadgets = activeCategory === "All Product"
        ? gadgets
        : gadgets.filter(gadget => gadget.category === activeCategory);

    return (
        <div className="font-sora mt-32 flex">
            <div className="w-[192px] h-[362px] p-4 mt-20 ml-8 bg-white rounded-2xl">
                <ul className="space-y-2">
                    {["All Product", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "iPhone"].map(category => (
                        <li key={category}>
                            <button
                                onClick={() => setActiveCategory(category)}
                                className={`w-full text-left py-2 px-4 rounded-3xl ${activeCategory === category ? "bg-[#9538E2] text-white" : "bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-3/4">
                <h1 className="text-4xl font-bold text-center mb-8">Explore Cutting-Edge Gadgets</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ml-8">
                    {filteredGadgets.map(gadget => (
                        <Gadget gadget={gadget} key={gadget.product_id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
