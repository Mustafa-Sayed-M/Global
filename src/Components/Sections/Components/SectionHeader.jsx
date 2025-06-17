function SectionHeader({ title = '', description = '', children }) {
    return (
        <div className="section-header mb-7 flex items-center justify-between gap-7">
            <div className="text-content flex-1">
                <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
                <p>{description}</p>
            </div>
            {/* Children */}
            {children}
        </div>
    )
}

export default SectionHeader;