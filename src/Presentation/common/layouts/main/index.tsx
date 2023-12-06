import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "@/Presentation/common/shared"

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            
            {/* Content start */}
            <Outlet />
            {/* Content end */}

            {/* footer */}
            <Footer />
        </div>
    )
}

export default MainLayout