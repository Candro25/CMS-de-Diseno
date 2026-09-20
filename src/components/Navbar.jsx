import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand text-white" to="/Home">
                ANGLAIA BLOG
            </Link>
            <div className= "navbar-nav">
            <Link className="nav-link text-white" to="/Home">
                Inicio
            </Link>
            <Link className="nav-link text-white" to="/About">
                Acerca de
            </Link>
            <Link className="nav-link text-white" to="/Contact">
                Contacto
            </Link>
            </div>
        </div>
        </nav>
    )
}