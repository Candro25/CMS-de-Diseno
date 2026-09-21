import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand text-white" to="/">
                ANGLAIA BLOG
            </Link>
            <div className= "navbar-nav">
            <Link className="nav-link text-white" to="/">
                INICIO
            </Link>
            <Link className="nav-link text-white" to="/Crear">
                SUBIR BLOG
            </Link>
            </div>
        </div>
        </nav>
    )
}