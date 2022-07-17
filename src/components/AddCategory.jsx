import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  /*const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }*/

   const onInputChange = ({target}) => {
    //console.log(target.value);
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault(); //Coloco esto para que no se refresque el navegador completo al hacer el submit

    //Si tenemos un caracter o menos de input, entonces no lo inserto a la lista.
    if( inputValue.trim().length <= 1) return; 

    //setCategories( (categories) => [inputValue, ...categories] ); //Agregamos el input a la lista de categorias existente
    
    //De lo contrario manejo la nueva categoria para agregarla
    onNewCategory( inputValue.trim() );
    setInputValue(''); //Ponemos la cajita de busqueda vacia luego de haber agregado el input

  }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
