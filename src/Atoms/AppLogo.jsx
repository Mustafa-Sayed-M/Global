import { Link } from "react-router-dom";

function AppLogo() {
    return (
        <Link
            to={'/'}
        >
            <img
                src="/assets/images/logo.png"
                className="Logo"
            />
        </Link>
    )
}

export default AppLogo;