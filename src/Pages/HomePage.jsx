import HomeHeader from "../Components/Headers/HomeHeader";
import PopularDestinationsSection from "../Components/Sections/PopularDestinationsSection";
import ExploreByTypeSection from "../Components/Sections/ExploreByTypeSection";
import ReviewsSection from "../Components/Sections/ReviewsSection";
import FlightsSearchSection from "../Components/Sections/FlightsSearchSection";

function HomePage() {
    return (
        <div className="home-page">
            {/*Header */}
            <HomeHeader />
            {/* Flights Search Section */}
            <FlightsSearchSection />
            {/* Popular Destinations Section */}
            <PopularDestinationsSection />
            {/* Explore By Type Section */}
            <ExploreByTypeSection />
            {/* Reviews Section */}
            <ReviewsSection />
        </div>
    )
}

export default HomePage;