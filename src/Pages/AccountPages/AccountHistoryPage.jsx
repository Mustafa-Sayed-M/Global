import { Outlet } from "react-router-dom";

function AccountHistoryPage() {
    return (
        <div className="account-history-page">
            Account History Page
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default AccountHistoryPage;