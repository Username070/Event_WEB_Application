import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/authSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

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
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                            {user ? (
                                <>
                                    <li className="btn-group nav-item">
                                        <a type="button" className="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.name}
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <Link className="dropdown-item" to="/create-event">New event</Link>
                                                </li>
                                            <li>
                                                <hr className="dropdown-divider"></hr>
                                            </li>
                                            <li>
                                                <button className="nav-link border-0 dropdown-item" onClick={onLogout}>Logout</button>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            ) :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header