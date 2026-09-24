import {useState, useContext,useEffect} from "react";
import { BlogContext } from "../context/BlogContext.jsx";
import {useNavigate} from "react-router-dom";

export default function Crear() {    
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const { agregarArticulo, editarArticulo, articuloAEditar,setArticuloAEditar } = useContext(BlogContext);
    
    const navigate = useNavigate();
    useEffect(() => {
        if (articuloAEditar) {
            setTitulo(articuloAEditar.titulo);
            setCategoria(articuloAEditar.categoria);
        }else {
            setTitulo('');
            setCategoria('');
        }
    }, [articuloAEditar]);

    function handleSubmit(e) {
        e.preventDefault();

        if (titulo.trim() === '' || categoria.trim() === '') {
            alert('Por favor, complete todos los campos antes de guardar.');
            return;
        }


        if (articuloAEditar !== null) {
            const articulModificado = {
                id: articuloAEditar.id,
                titulo: titulo,
                categoria: categoria
            };
            editarArticulo(articuloAEditar.id, articulModificado);
        }else{
            agregarArticulo(titulo, categoria);
        }    
        setTitulo('');
        setCategoria('');
        setArticuloAEditar(null); // Limpiar el estado de edición después de guardar
        navigate('/'); // Redirigir a la página de inicio después de guardar
    }

    function handleCancelar() {
        setTitulo('');
        setCategoria('');
        setArticuloAEditar(null); // Limpiar el estado de edición al cancelar
        navigate('/'); // Redirigir a la página de inicio al cancelar   
    };
    return (
        <div className="container mt-4">
            <h1>{articuloAEditar !== null ? "Actualiza tu Artículo" : "Crea tu Artículo"}</h1>
            <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
                <h3>{articuloAEditar !== null ? "Editar Artículo" : "Agregar Nuevo Artículo"}</h3>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ingrese el título del artículo"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <input
                    type="text"
                    className="form-control"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    placeholder="Ingrese la categoría del artículo"
                    />
                </div>
                <button type="submit" className="btn btn-primary">{articuloAEditar !== null ? "Actualizar Artículo" : "Agregar Artículo"}</button>
                {articuloAEditar !== null && (
                    <button className="btn btn-secondary ms-2" onClick={handleCancelar}>
                        Cancelar
                    </button>
                )}
            </form>
        </div>
    );
}