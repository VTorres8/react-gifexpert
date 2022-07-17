import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    /*El useEffect es un hook de React utilizado para disparar efectos secundarios,
     es decir, algun proceso que queramos ejecutar justo despues de que algo suceda
     p.ej: cuando el componente se renderiza, quiero disparar un efecto
     
     En este caso, unicamente cuando el componente se carga por primera vez yo quiero que
     solo ahi se dispare la peticion HTTP.

     El useEffect tiene dos partes, primero una funcion que queremos ejecutar, en este caso
     "getGifs" y en segundo lugar una lista de dependencias que seran las condiciones bajo las
     cuales queremos que se ejecute esa funcion antes colocada.

     Si por ejemplo, aqui ponemos un arreglo vacio, el hook se disparara unicamenre la primera vez
     que se ejecuta el componenete
     */

    /*const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }*/

    /*const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        //console.log(newImages);
        setImages(newImages);
    }

    useEffect( ()=>{
            getImages();
    }, [])

    Podemos colocar todo este bloque de codigo en una sola linea si utilizamos un
    custom hook: 
    */

    const {images, isLoading} = useFetchGifs(category);
    //console.log(isLoading);
    
  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && <h2>Cargando...</h2>
            /*Otra forma
            isLoading
            ? (<h2>Cargando...</h2>)
            :null                        */
        }

        <div className="card-grid">
            {
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        {...image}
                    />

                ))
            }   
        </div>

    </>
  )
}
