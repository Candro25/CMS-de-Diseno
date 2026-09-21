import { useContext} from "react";
import { BlogContext} from "../context/BlogContext.jsx";
import {useNavigate} from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();
    const { articulos, eliminarArticulo, setArticuloAEditar } = useContext(BlogContext);
    const handleEditar = (articulo) => {
        setArticuloAEditar(articulo); // Establece el artículo a editar en el contexto
        navigate('/Crear'); // Navega a la página de creación/edición
    }
    return (
        // 2. Un contenedor div (o un container de Bootstrap) envuelve TODO
        <div className="container mt-4">
            <h1 className="text-primary text-center mb-4">Blog Anglaia</h1>

            {articulos.map((articulo) => (
                <div key={articulo.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{articulo.titulo}</h5>
                        <p className="card-text">Categoría: {articulo.categoria}</p>
                        <button onClick={() => eliminarArticulo(articulo.id)} className="btn btn-danger btn-sm me-2">Eliminar articulo</button>
                        <button onClick={() => handleEditar(articulo)} className="btn btn-warning btn-sm me-2">Editar articulo</button>
                    </div>
                </div>
            ))}
        </div>
    );

}