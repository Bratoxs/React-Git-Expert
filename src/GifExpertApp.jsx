import { useState } from 'react'; // importar Hook
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {

    // Declarar un nuevo estado llamado "categories" con valor inicial 'One Punch'
    const [categories, setCategories] = useState(['One Punch']);

    // Función para agregar un nuevo estado
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return; // Preguntar si la categoria ya existe
        // setCategories(['Doraemon', ...categories]);
        setCategories([newCategory, ...categories]);
    };

    console.log(categories);
    
    return (
        <>
            {/* Titulo */}
            <h1>GitExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories = {setCategories}
                onNewCategory = {(value) => onAddCategory(value)} // onNewCategory es el nombre de la propiedad 'Cualquier nombre'
            />

            {/* Listado de Gif */}
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    );
}