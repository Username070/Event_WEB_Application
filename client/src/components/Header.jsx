import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <header>
                <nav className="navbar navbar-light bg-light navbar-expand-lg border-bottom shadow-sm">
                    <span className="navbar-brand text-dark ps-3">Event Portal</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end pe-3" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Main</Link>
                            </li>
                            { user ? (
                                <li className="nav-item">
                                    Logout
                                </li>
                            ) :
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header