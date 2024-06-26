import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Footer } from "./components/Footer"


function App() {
    return (
        <div className="w-full bg-background min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App