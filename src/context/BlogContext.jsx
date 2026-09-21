import {createContext, useState, useEffect} from "react";

export const BlogContext = createContext();

export function BlogProvider({children}) {
    const [articuloAEditar, setArticuloAEditar] = useState(null); // estado para almacenar el artículo que se va a editar
    const [articulos, setArticulos] = useState(() => {
        // Recupera los artículos del localStorage al cargar la página y así no se pierden al recargarla 
        const articulosGuardados = localStorage.getItem('articulos');
            if (articulosGuardados !== null){
                try{
                    return JSON.parse(articulosGuardados);
                } catch (error){
                    return [];
                }
            }
            return[];
        }
            
);
useEffect(() => {
        const articulosString = JSON.stringify(articulos);
        localStorage.setItem('articulos', articulosString); // guarda el array de articulos en localStorage
    }, [articulos]);


const agregarArticulo = (titulo,categoria) =>{
    const nuevoArticulo = {
        id: Date.now(), // genera un id unico basado en la fecha.
        titulo: titulo,
        categoria: categoria
    }
    setArticulos(prevArticulos =>([...prevArticulos, nuevoArticulo])); // agrega el nuevo articulo al array de articulos
}

const editarArticulo = (id, articuloEditado) =>{
    setArticulos(prevArticulos => prevArticulos.map((articulo) => articulo.id === id ? {...articuloEditado} : articulo)); // actualizar el articulo
}

const eliminarArticulo = (id) =>{
        setArticulos(prevArticulos => prevArticulos.filter((articulo) => articulo.id !==id)); //elimina el articulo con el id especificado
    }

    return(
       <BlogContext.Provider value={{articulos, setArticulos, agregarArticulo, eliminarArticulo, editarArticulo, articuloAEditar, setArticuloAEditar}}>
            {children}
        </BlogContext.Provider>
    )
}

