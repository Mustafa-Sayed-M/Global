import { Link } from "react-router-dom";

function ExploreCard({ bgImageSrc = '', title = '', description = '', to = '' }) {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImageSrc})`,
                backgroundSize: 'cover'
            }}
            className="explore-card rounded-3xl flex flex-col justify-end max-lg:h-[400px] lg:h-[600px] lg:flex-1 p-5 text-white"
        >
            <h3 className="font-semibold text-2xl mb-2 text-center">{title}</h3>
            <p className="mb-3 mx-auto w-3/4 text-center">{description}</p>
            <Link
                to={to}
                className="flex items-center gap-2 py-2 px-4 w-fit bg-[#8DD3BB] rounded-md mx-auto"
            >
                <i className="fa-solid fa-paper-plane fa-fw"></i>
                <span>Show {title}</span>
            </Link>
        </div>
    )
}

export default ExploreCard;