import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="navBar">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link to="/" className="nav_link">Homepage</Link>
                </li>
                <li className="nav_item">
                    <Link to="/posts" className="nav_link">Post</Link>
                </li>
                <li className="nav_item">
                    <Link to="/counter" className="nav_link">Contatore</Link>
                </li>
                <li className="nav_item">
                    <Link to="/form" className="nav_link">Form</Link>
                </li>
            </ul>
        </div>
    )
}