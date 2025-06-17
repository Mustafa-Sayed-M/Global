import { NavContextProvider } from "./NavContext";

function AppProviders({ children }) {
    return (
        <NavContextProvider>
            {/* Children */}
            {children}
        </NavContextProvider>
    )
}

export default AppProviders;