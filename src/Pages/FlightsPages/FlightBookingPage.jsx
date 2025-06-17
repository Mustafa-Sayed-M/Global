import { Outlet } from "react-router-dom";

function FlightBookingPage() {
    return (
        <div className="flight-booking-page">
            Flight Booking Page
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default FlightBookingPage;