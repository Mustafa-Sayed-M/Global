import { Link } from "react-router-dom";

function AuthLinks({ className = '' }) {
    return (
        <div className={`auth-actions flex items-center gap-3 ${className}`}>
            {/* Login */}
            <Link
                to={`/auth/signin`}
                className="block py-2 px-4"
            >
                Login
            </Link>
            {/* Sign Up */}
            <Link
                to={`/auth/signup`}
                className="block py-2 px-4 rounded-md bg-[#112211] text-white"
            >
                Sign up
            </Link>
        </div>
    )
}

export default AuthLinks;