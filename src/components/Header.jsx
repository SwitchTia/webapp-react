import { NavLink } from "react-router-dom";
import "./Header.css";


export default function Header({ nameApp }) {


    const headerLinks = [

        { title: "Home", path: "/" },
        { title: "Movies", path: "/movies" },

    ];


    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">WEBAPP</div>
                <div>
                    <ul className="nav-item">
                        {headerLinks.map((link, index) => (
                            <li  key={index}>
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to={link.path}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </header>
    );
}