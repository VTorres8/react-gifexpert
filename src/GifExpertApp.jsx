import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

//Componente Principal
export const GifExpertApp = () => {
    
    //Ya tenemos un espacio en memoria que servira para manejar categorias
    //A parte de solo almacenarlos ahi, quiero inicializarlo como un arreglo
    //Dicho arreglo puede tener un primer valor
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);

        //Si la categoria ya existe, entonces no la agrega a la lista.
        if ( categories.includes(newCategory) ) return;

        //Pero si no existe la inserta
        setCategories([ newCategory, ...categories ]);

        /*
        TAREA: Agregar Valorant
        
        categories.push('Valorant');

        NO usar push porque mutamos el estado, es decir lo modificamos y queremos conservarlo
        Alternativas que crean un nuevo arreglo y no mutan el estado son:

        setCategories(categories.concat(['Valorant']));
        setCategories(cat => [...cat, 'Valorant']);
        setCategories([...categories, 'Valorant']);
        setCategories(['Valorant', ...categories]);*/
    }

    return(
        <>
            {/*Titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input en un Componente Independiente*/}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory = { (value) => onAddCategory(value) }
            />

             {/*Listado de Gifs con ol (orderedList) y li (listItems)*/}


            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }

                {/*GIF Items */}
        </>
    )
}