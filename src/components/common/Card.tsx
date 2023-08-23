import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Item } from "@/types";

interface CardProps {
    recipe: Item;
}

const Card: FC<CardProps> = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe.sys.id}`} key={recipe.sys.id} className="card">
            <img
                className="card__photo"
                src={recipe.fields.file?.url}
                alt={recipe.fields.title}
            />

            <h2 className="card__title">
                {recipe.fields.title}
            </h2>
        </Link>
    );
};

export default Card;
