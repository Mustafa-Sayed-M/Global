import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function AppLayout() {
    return (
        <div className="app-layout">
            {/* Nav */}
            <Nav />
            {/* Outlet */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default AppLayout;