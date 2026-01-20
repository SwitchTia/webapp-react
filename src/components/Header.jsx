import { NavLink } from "react-router-dom";
import "./Header.css";


export default function Header({ nameApp }) {
  

  const headerLinks = [
    { title: "Home", path: "/" },
    { title: "Movies", path: "/moovies" },
  ];


  return (
   <header className="header">
            <div className="header-content">
                <div className="logo">WEBAPP</div>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Searching for something?"
                        
                    />

                    <button >Search</button>
                </div>

            </div>
        </header>
  );
}