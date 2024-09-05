import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  // Reducir código
const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        // If ternario, miestras isLoading es true aparece el mensaje Cargando
        // isLoading
        // ? (<h2>Cargando...</h2>)
        // : null

        // Otra forma, si isLoading esta en true ejecuta la segunda parte de la instruccion
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          // images.map(img => (
          //   <li key={img.id}>{img.title}</li>
          // ))
          images.map((image) => (
            <GifItem 
              key={image.id}
              // title={image.title}
              // url={image.url}
              {...image} // Si tengo 100 propiedades, las puedo enviar todas sin necesidad de estar enviando una por una
            />
          ))
        }
      </div>
    </>
  );
}
