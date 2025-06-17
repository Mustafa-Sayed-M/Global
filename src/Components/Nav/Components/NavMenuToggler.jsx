import { useNav } from "../../../Contexts/NavContext";

function NavMenuToggler() {

    const { menuIsOpen, setMenuIsOpen } = useNav();

    const handleClick = (e) => {
        e.stopPropagation();
        setMenuIsOpen(prev => !prev);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="text-4xl md:hidden"
            title={(menuIsOpen ? "Close" : "Open") + " Menu"}
        >
            <i className={`fa-solid fa-${menuIsOpen ? 'xmark' : 'bars'} fa-fw`}></i>
        </button>
    )
}

export default NavMenuToggler;