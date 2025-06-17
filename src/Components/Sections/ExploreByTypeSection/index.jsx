import ExploreCard from "./ExploreCard";

function ExploreByTypeSection() {
    return (
        <section className="explore-by-type-section py-7">
            <div className="container flex lg:items-center gap-5 max-lg:flex-col">
                {/* Explore Card */}
                <ExploreCard
                    bgImageSrc="/assets/images/flights-bg.png"
                    description="Search Flights & Places Hire to our most popular destinations"
                    title="Flights"
                    to="/flights"
                />
                {/* Explore Card */}
                <ExploreCard
                    bgImageSrc="/assets/images/hotels-bg.png"
                    description="Search hotels & Places Hire to our most popular destinations"
                    title="Hotels"
                    to="/stays"
                />
            </div>
        </section>
    )
}

export default ExploreByTypeSection;