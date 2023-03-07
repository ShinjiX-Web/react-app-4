import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="navbars">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cars">Cars</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;