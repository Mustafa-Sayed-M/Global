import { Outlet } from "react-router-dom";

function AccountLayout() {
    return (
        <div className="account-layout">
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default AccountLayout;