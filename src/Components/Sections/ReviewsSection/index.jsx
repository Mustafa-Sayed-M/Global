import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../Components/SectionHeader";
import reviewsData from '../../../Data/reviews.json';

function ReviewsSection() {
    return (
        <section className="review-section py-7">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Reviews"
                    description="What people says about Global facilities"
                >
                    <Link to={''} className="block py-2 px-4 rounded-md border border-[#8DD3BB]">See All</Link>
                </SectionHeader>
                {/* Reviews Slider */}
                <div className="reviews-slider">
                    <Swiper
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            },
                        }}
                    >
                        {
                            reviewsData.map(({ platformLogo, title, description, reviewerName, reviewerPosition, platform, imageUrl }, index) => (<SwiperSlide key={index}>
                                <div className="review-card p-5 rounded-md bg-white shadow-md border border-gray-200">
                                    {/* Title */}
                                    <h3 className="text-2xl mb-7 line-clamp-1">{title}</h3>
                                    {/* Description */}
                                    <p className="mb-3 line-clamp-2">{description}</p>
                                    {/* Rating */}
                                    <ul className="flex items-center gap-1 mb-4">
                                        {
                                            Array.from({ length: 5 }).map((_, index) => (<li key={index} className="text-yellow-500">
                                                <i className="fa-solid fa-star fa-fw"></i>
                                            </li>))
                                        }
                                    </ul>
                                    {/* Reviewer Name */}
                                    <h4 className="mb-2">{reviewerName}</h4>
                                    {/* Reviewer Position */}
                                    <p className="mb-2">{reviewerPosition}</p>
                                    {/* Platform Logo */}
                                    <div className="platform-logo flex items-center gap-2 mb-3">
                                        <img
                                            src={platformLogo}
                                            alt="Platform Logo"
                                            width={40}
                                        />
                                        <p>{platform}</p>
                                    </div>
                                    {/* imageUrl */}
                                    <img
                                        src={imageUrl}
                                        alt={title || "Image"}
                                        className="rounded-md aspect-video object-cover"
                                    />
                                </div>
                            </SwiperSlide>))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection;