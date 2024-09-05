import { useEffect, useState } from "react"; // Hook useEffect sirve para disparar efectos secundarios
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []); // Se manda las dependencias vacias [], lo que significa que solo lo va a crear una ves

  return {
    images,
    isLoading,
  }
}
