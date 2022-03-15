import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/authSlice';

const Footer = () => {
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
            <div className="border-top shadow-lg">
                <footer className="py-3 mt-4 container">
                    <ul className="nav justify-content-center border-bottom">
                        <li className="nav-item">
                            <Link className="nav-link px-2 text-muted" to="/">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-2 text-muted" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-2 text-muted" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-2 text-muted" to="/contacts">Contacts</Link>
                        </li>
                        {user ? (
                                <li className="nav-item">
                                    <a className="nav-link px-2 text-muted cursor-pointer" onClick={onLogout}>Logout</a>
                                </li>
                            ) :
                                <li className="nav-item">
                                    <Link className="nav-link px-2 text-muted" to="/register">Register</Link>
                                </li>
                            }
                    </ul>
                    <p className="text-center text-muted">© 2022 Ignas. Inc</p>
                </footer>
            </div>
        </>
    )
}

export default Footer