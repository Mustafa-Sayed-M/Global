import { NavLink } from "react-router-dom";
import AuthLinks from "./AuthLinks";
import { useNav } from "../../../Contexts/NavContext";
import React from "react";

const linksList = [
    { to: '/flights', label: 'Find Flights', icon: 'plane' },
    { to: '/stays', label: 'Find Stays', icon: 'bed' }
];

function NavLinks() {

    const { menuIsOpen, setMenuIsOpen } = useNav();
    const menuIsOpenRef = React.useRef(menuIsOpen);
    const navLinksRef = React.useRef(null);

    // Handle menu is open change value
    React.useEffect(() => {
        menuIsOpenRef.current = menuIsOpen;
    }, [menuIsOpen]);
    // Handle window resize
    React.useEffect(() => {
        const handleResize = () => {
            if (menuIsOpenRef.current) setMenuIsOpen(false);
            // Remove Transition Class
            if (window.innerWidth > 768) {
                if (navLinksRef.current) {
                    navLinksRef.current.classList.remove('max-md:transition');
                }
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setMenuIsOpen]);
    // Handle Click any where
    React.useEffect(() => {
        const handleClickAnyWhere = () => {
            if (menuIsOpenRef.current) setMenuIsOpen(false);
        }
        document.addEventListener('click', handleClickAnyWhere);
        return () => document.removeEventListener('click', handleClickAnyWhere);
    }, [setMenuIsOpen]);

    return (
        <div
            ref={navLinksRef}
            className={`nav-links max-md:absolute max-md:z-50 max-md:top-full max-md:left-0 max-md:w-full max-md:mt-3 max-md:transition ${menuIsOpen ? 'max-md:opacity-100 max-md:scale-x-100' : 'max-md:pointer-events-none max-md:opacity-0 max-md:scale-x-75'}`}
        >
            <div className="max-md:container">
                <ul className="flex md:items-center max-md:gap-2 md:gap-5 max-md:flex-col max-md:bg-white max-md:rounded-md max-md:shadow-md max-md:border-2 max-md:border-[#8dd3bb] max-md:p-2">
                    {
                        linksList.map(({ to, label, icon }, index) => (<li key={index}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 max-md:p-3 md:py-5 max-md:rounded-md max-md:transition-colors relative md:before:absolute md:before:w-full md:before:h-1 md:before:bg-[#8dd3bb] md:before:left-0 md:before:bottom-0 md:before:z-10 md:before:transition-transform md:before:origin-left md:before:duration-300 ${isActive ? 'md:before:scale-x-100 max-md:bg-[#8dd3bb]' : 'md:before:scale-x-0 max-md:bg-[#8dd3bb]/20'}`
                                }
                            >
                                <i className={`fa-solid fa-${icon} fa-fw`}></i>
                                <span>{label}</span>
                            </NavLink>
                        </li>))
                    }
                    {/* Auth Links */}
                    <li className="sm:hidden border-t-2 border-t-[#8dd3bb] py-3">
                        <AuthLinks className="sm:hidden justify-center" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;