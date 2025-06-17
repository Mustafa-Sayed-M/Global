import AuthLinks from "./Components/AuthLinks";
import NavLinks from "./Components/NavLinks";
import NavMenuToggler from "./Components/NavMenuToggler";
import AppLogo from "../../Atoms/AppLogo";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Nav() {

    const { user } = useUser();

    return (
        <nav className="shadow-md relative max-md:py-3">
            <div className="container flex items-center justify-between">
                {/* Nav Links */}
                <NavLinks />
                {/* App Logo */}
                <AppLogo />
                {/* Nav Utilities */}
                <div className="nav-utilities flex items-center gap-3">
                    {
                        user ? (
                            <div className="flex items-center gap-3">
                                {/* Favorites Link */}
                                <Link
                                    to={'/favorites'}
                                    className="flex items-center gap-2 text-lg"
                                >
                                    <i className="fa-solid fa-heart fa-fw"></i>
                                    <span>Favorites</span>
                                </Link>
                                {/* Split Line */}
                                <span className="h-5 w-1 bg-[#112211]"></span>
                                {/* User Button */}
                                <UserButton />
                            </div>
                        ) : (
                            <AuthLinks className="max-sm:hidden" />
                        )
                    }
                    {/* Nav Menu Toggler */}
                    <NavMenuToggler />
                </div>
            </div>
        </nav>
    )
}

export default Nav;