import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe}) => {
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-[340px] h-full mx-4 p-4 shadow-xl border">
        <figure>
          <img
            src={recipe_image}
            alt={`Cover picture of ${recipe_name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-sm text-gray-400">{short_description}</p>
          <hr />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Ingredients: {ingredients.length} <br /> 
                <span>
                    <ul className="text-sm text-gray-400 font-medium list-disc ps-7">
                        {recipe.ingredients.map((ingredient,index) => 
                            <li key={index}>{ingredient}</li>
                            )
                        }
                        
                    </ul>
                </span>
            </h3>
          </div>
          <hr />
          <div className="flex text-xs text-gray-600 my-4">
            <p className="flex items-center gap-2"><MdOutlineWatchLater />{preparing_time}</p>
            <p className="flex items-center gap-2"><FaFire />{calories}</p>
          </div>
          <div className="card-actions">
            <button className="btn bg-green-400 rounded-3xl px-8 font-black">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Recipe;
