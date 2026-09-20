import {useState} from "react";

export default function Home(){
    const [articulos, setArticulos] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [Ideditar, setIdeditar] = useState(null);

    const agregarArticulo = (e) =>{
        e.preventDefault(); // que no se recargue la página al enviar el formulario
        if (!titulo || !categoria) return; //validacion: hay cambpos vacios, no se agrega el articulo

            if (Ideditar !== null) {
                const articulosActualizados = articulos.map((articulo) => {
                    if (articulo.id === Ideditar) {
                            return { ...articulo, titulo: titulo, categoria: categoria }; // actualiza el articulo con el id especificado
                        }else{
                            return articulo; // devuelve el articulo sin cambios
                             }

            });

            setArticulos(articulosActualizados);

        } else {
            const nuevoArticulo = {
            id: Date.now(), // genera un id unico basado en la fecha.
            titulo: titulo,
            categoria: categoria
        }
        setArticulos([...articulos, nuevoArticulo]); // agrega el nuevo articulo al array de articulos
        
    }
    setTitulo(''); // limpia el campo de titulo
    setCategoria(''); // limpia el campo de categoria
    setIdeditar(null);
    }
    const editarArticulo = (articulo)=>{
    
        setIdeditar(articulo.id);
        setTitulo(articulo.titulo);
        setCategoria(articulo.categoria);
        
    }
    const eliminarArticulo = (id) =>{
        setArticulos(articulos.filter((articulo) => articulo.id !==id)); //elimina el articulo con el id especificado
    }
    return (
        // 2. Un contenedor div (o un container de Bootstrap) envuelve TODO
        <div className="container mt-4">
            <h1 className="text-primary text-center mb-4">Blog de Anglaia</h1>

            <form onSubmit={agregarArticulo} className="mb-4 p-3 border rounded bg-light">
                <h3>{Ideditar !== null ? "Editar Artículo" : "Agregar Nuevo Artículo"}</h3>
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
                <button type="submit" className="btn btn-primary">{Ideditar !== null ? "Actualizar Artículo" : "Agregar Artículo"}</button>
            </form>

            {articulos.map((articulo) => (
                <div key={articulo.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{articulo.titulo}</h5>
                        <p className="card-text">Categoría: {articulo.categoria}</p>
                        <button onClick={() => eliminarArticulo(articulo.id)} className="btn btn-danger btn-sm me-2">Eliminar articulo</button> 
                        <button onClick={() => editarArticulo(articulo)} className="btn btn-warning btn-sm me-2">Editar articulo</button>
                    </div>
                </div>
            ))}
        </div>
    );

}