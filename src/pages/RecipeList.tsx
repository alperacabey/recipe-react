import { FC, useEffect, useState } from 'react';
import { getRecipeList } from '../services/contentfulService';
import { Item } from '@/types';
import Container from '@/components/common/Container';
import Card from '@/components/common/Card';

const RecipeList: FC = () => {
  const [recipes, setRecipes] = useState<Item[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await getRecipeList();
        if (fetchedRecipes) {
          setRecipes(fetchedRecipes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Container title="Recipe List">
      {recipes.map((recipe) => (
        <Card key={recipe.sys.id} recipe={recipe} />
      ))}
    </Container>
  );
};

export default RecipeList;
