import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <>
            <div className="border-top shadow-lg">
                <footer className="py-3 mt-4 container">
                    <ul className="nav justify-content-center border-bottom">
                        <li className="nav-item">
                            <Link className="nav-link px-2 text-muted" to="/">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-2 text-muted" to="/register">Register</Link>
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
                    </ul>
                    <p className="text-center text-muted">© 2022 Ignas. Inc</p>
                </footer>
            </div>
        </>
    )
}

export default Footer