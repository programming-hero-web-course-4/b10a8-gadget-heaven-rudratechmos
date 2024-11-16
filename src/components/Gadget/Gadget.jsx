import {Link} from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const {product_id, product_title, product_image, category, price } = gadget;

    return (
        <div className="card card-compact p-4 bg-base-100 w-[322px] h-[380px] shadow-xl font-sora">
            <figure>
                <img
                    className="h-[181px]"
                    src={product_image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
                <p className="text-xl">Price: {price}k</p>
                <Link to={`/gadgets/${product_id}`}>
                    <div className="card-actions justify-start">
                        <button className="btn rounded-3xl text-lg text-[#9538E2] border-[#9538E2]">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Gadget;