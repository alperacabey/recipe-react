import { useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getRecipe, getAsset, getContent } from '@/services/contentfulService'; // getTag ve getChef eklendi
import { ItemFields, AssetFields, EntryFields } from '@/types';
import Container from '@/components/common/Container';
import Banner from '@/components/Banner';

const RecipeDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<ItemFields>();
  const [asset, setAsset] = useState<AssetFields>();
  const [tags, setTags] = useState<Array<EntryFields | undefined>>([]);
  const [chef, setChef] = useState<EntryFields | undefined>();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        try {
          const fetchedRecipe = await getRecipe(id);
          setRecipe(fetchedRecipe);
          console.log(fetchedRecipe)

          // Fetch asset
          const assetId = fetchedRecipe?.photo.sys.id;
          if (assetId) {
            const fetchedAsset = await getAsset(assetId);
            setAsset(fetchedAsset);
            console.log(fetchedAsset)
          }

          // Fetch tags
          const fetchedTags = await Promise.all(
            (fetchedRecipe?.tags || []).map(tag => getContent(tag.sys.id, 'tags'))
          );
          if(fetchedTags.length > 0){
              setTags(fetchedTags);
              console.log(fetchedTags)
          }

          // Fetch chef
          if (fetchedRecipe?.chef) {
            const fetchedChef = await getContent(fetchedRecipe.chef.sys.id, 'chef');
            setChef(fetchedChef);
            console.log(fetchedChef)
          }

        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container title="Recipe Detail" showBackButton>
      <div>
        <Banner title={recipe.title} url={asset?.file.url || ''} />
        <ReactMarkdown className="recipe-detail__description">
          {recipe.description}
        </ReactMarkdown>
        <div className="recipe-detail__chef">
          Chef: {chef?.name || 'Unknown'}
        </div>
        <div className="recipe-detail__calories">
          Calories: {recipe.calories}
        </div>
        <div className="recipe-detail__tag-wrapper">
          {(tags || []).map((tag, index) => (
            <div className="recipe-detail__tag" key={index}>{tag?.name}</div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecipeDetail;
