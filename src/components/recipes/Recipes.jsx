import { useEffect } from 'react';
import { useState } from 'react';
import Recipe from '../recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);
    return (
        <div className='w:full md:w-2/3 my-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-0'>
            {recipes.map((recipe, index) => <Recipe
                key={index}
                recipe={recipe}></Recipe>)}
        </div>
    );
};

export default Recipes;