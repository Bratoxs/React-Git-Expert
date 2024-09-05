import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {
    //     console.log(event.target.value)
    //     setInputValue(event.target.value);
    // };

    // Forma Simplificada
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Evita el refresh del Formulario
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                // onChange={(event) => onInputChange(event)} Uso para la forma normal
                onChange={onInputChange}
            />
        </form>
    )
}
