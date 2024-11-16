import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const NavBar = () => {
    const location = useLocation();

    const navbarBackgroundColor = location.pathname === '/' ? '#9538E2' : '#ffffff';

    const navbarTextColor = navbarBackgroundColor === '#9538E2' ? 'white' : 'black';

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? navbarTextColor : navbarTextColor,
                        backgroundColor: 'transparent', 
                        textDecoration: isActive ? 'underline' : 'none', 
                    })}
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistics"
                    style={({ isActive }) => ({
                        color: isActive ? navbarTextColor : navbarTextColor,
                        backgroundColor: 'transparent', 
                        textDecoration: isActive ? 'underline' : 'none', 
                    })}
                >Statistics</NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    style={({ isActive }) => ({
                        color: isActive ? navbarTextColor : navbarTextColor,
                        backgroundColor: 'transparent', 
                        textDecoration: isActive ? 'underline' : 'none',
                    })}
                >Dashboard</NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        color: isActive ? navbarTextColor : navbarTextColor,
                        backgroundColor: 'transparent', 
                        textDecoration: isActive ? 'underline' : 'none',
                    })}
                >About</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar font-[sora] rounded-t-3xl px-16 py-4 mt-6 w-11/12 mx-auto" style={{ backgroundColor: navbarBackgroundColor }}>
            <div className="navbar-start">
                <a className="text-xl font-bold" style={{ color: navbarTextColor }}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 flex">
                <a className="btn rounded-full p-4 border bg-white text-black hover:bg-[#D3A1E8]">
                    <IoCartOutline />
                </a>
                <a className="btn rounded-full p-4 border bg-white text-black hover:bg-[#D3A1E8]">
                    <CiHeart />
                </a>
            </div>
        </div>
    );
};

export default NavBar;





