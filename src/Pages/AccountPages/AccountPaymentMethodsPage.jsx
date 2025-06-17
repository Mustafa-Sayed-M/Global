import { Outlet } from "react-router-dom";

function AccountPaymentMethodsPage() {
    return (
        <div className="account-payment-methods-page">
            Account Payment Methods Page
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default AccountPaymentMethodsPage;