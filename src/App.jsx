import { Route, Routes } from "react-router-dom";
// Layouts
import AppLayout from "./Layouts/AppLayout";
import AuthLayout from "./Layouts/AuthLayout";
import AccountLayout from "./Layouts/AccountLayout";
// # Pages
// Main Pages
import HomePage from "./Pages/HomePage";
import FavoritesPage from "./Pages/FavoritesPage";
// Flights Pages
import FlightsPage from "./Pages/FlightsPages/FlightsPage";
import FlightsSearchPage from "./Pages/FlightsPages/FlightsSearchPage";
import FlightDetailsPage from "./Pages/FlightsPages/FlightDetailsPage";
import FlightBookingPage from "./Pages/FlightsPages/FlightBookingPage";
// Hotel Pages
import StaysPage from "./Pages/HotelPages/StaysPage";
import StaysSearchPage from "./Pages/HotelPages/StaysSearchPage";
import StayBookingPage from "./Pages/HotelPages/StayBookingPage";
import StayDetailsPage from "./Pages/HotelPages/StayDetailsPage";
// Account Pages
import AccountPage from "./Pages/AccountPages/AccountPage";
import AccountHistoryPage from "./Pages/AccountPages/AccountHistoryPage";
import AccountPaymentMethodsPage from "./Pages/AccountPages/AccountPaymentMethodsPage";
// Auth Pages
import SigninPage from "./Pages/AuthPages/SigninPage";
import SignupPage from "./Pages/AuthPages/SignupPage";
import ForgetPasswordPage from "./Pages/AuthPages/ForgetPasswordPage";
import ResetPasswordPage from "./Pages/AuthPages/ResetPasswordPage";
import VerifyCodePage from "./Pages/AuthPages/VerifyCodePage";
import AddPaymentMethodPage from "./Pages/AuthPages/AddPaymentMethodPage";
// Modals
import AddNewCardPaymentModal from "./Modals/AddNewCardPaymentModal";

function App() {
  return (
    <div className="App text-[#112211] bg-[#fafbfc]">
      <Routes>
        {/* App Layout */}
        <Route path="/" element={<AppLayout />}>
          {/* Common Pages */}
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* Flights Pages */}
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/flights/search" element={<FlightsSearchPage />} />
          <Route path="/flights/:flightId" element={<FlightDetailsPage />} />
          <Route path="/flights/:flightId/booking" element={<FlightBookingPage />}>
            {/* Add New Card Payment # Modal ( This Modal Component Not Page Component ) # */}
            <Route path="/flights/:flightId/booking/add-new-card-payment" element={<AddNewCardPaymentModal />} />
          </Route>

          {/* Hotel Pages */}
          <Route path="/stays" element={<StaysPage />} />
          <Route path="/stays/search" element={<StaysSearchPage />} />
          <Route path="/stays/:stayId" element={<StayDetailsPage />} />
          <Route path="/stays/:stayId/booking" element={<StayBookingPage />}>
            {/* Add New Card Payment # Modal ( This Modal Component Not Page Component ) # */}
            <Route path="/stays/:stayId/booking/add-new-card-payment" element={<AddNewCardPaymentModal />} />
          </Route>

          {/* Account Layout */}
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<AccountPage />} />
            <Route path="/account/history" element={<AccountHistoryPage />}>
              <Route path="/account/history" element={<>Account History Page - Flights</>} />
              <Route path="/account/history/stays" element={<>Account History Page - Stays</>} />
            </Route>
            <Route path="/account/payment-methods" element={<AccountPaymentMethodsPage />}>
              {/* Add New Card Payment # Modal ( This Modal Component Not Page Component ) # */}
              <Route path="/account/payment-methods/add-new-card-payment" element={<AddNewCardPaymentModal />} />
            </Route>
          </Route>
        </Route>

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/signin" element={<SigninPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
          <Route path="/auth/verify-code" element={<VerifyCodePage />} />
          <Route path="/auth/add-payment-method" element={<AddPaymentMethodPage />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App;