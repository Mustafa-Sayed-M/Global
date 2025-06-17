import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import popularDestinationsData from '../../../Data/popularDestinations.json';

function PopularDestinationsSection() {
    return (
        <section className="popular-destinations-section">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Plan your perfect trip"
                    description="Search Flights & Places Hire to our most popular destinations"
                >
                    <Link to={''} className="block py-2 px-4 rounded-md border border-[#8DD3BB]">See more places</Link>
                </SectionHeader>
                {/* Places Grid */}
                <div className="places-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        popularDestinationsData.map(({ city, country, services, imageUrl }, index) => (<div
                            className="destination-card bg-white p-3 rounded-md shadow-md flex items-center gap-3"
                            key={index}
                        >
                            {/* Destination Image */}
                            <img
                                src={imageUrl}
                                alt="Destination Image"
                                width={70}
                                height={70}
                                className="object-cover rounded-sm"
                            />
                            {/* Destination Info */}
                            <div className="destination-info">
                                {/* City and Country */}
                                <div className="city-country mb-2 text-xl">
                                    {city}, {country}
                                </div>
                                {/* Services */}
                                <ul className="flex items-center gap-2">
                                    {
                                        services.map((service, index) => (<li key={index}>
                                            <span>{service}</span>
                                            {
                                                index < (services.length - 1) &&
                                                <span className="ms-2">.</span>
                                            }
                                        </li>))
                                    }
                                </ul>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularDestinationsSection;