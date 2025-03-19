import { Outlet } from "react-router"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import './Layout.scss'

const Layout = () => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout