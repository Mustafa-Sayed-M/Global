function HomeHeader() {
    return (
        <header className="py-5">
            <div className="container">
                <div
                    style={{
                        backgroundImage: 'url(/assets/images/home-header-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="header-content rounded-3xl max-md:h-[500px] md:aspect-video text-white flex items-center"
                >
                    <div className="content-wrapper text-center w-full">
                        <h1 className="text-3xl mb-4">Helping Others</h1>
                        <h2 className="text-6xl font-semibold uppercase mb-7">Live & Travel</h2>
                        <p>Special offers to suit your plan</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;