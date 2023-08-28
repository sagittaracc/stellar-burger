import { useParams } from 'react-router-dom';

const Ingredient = () => {
    const { id } = useParams();

    return (
        <>Ingredient: {id}</>
    );
}

export default Ingredient;