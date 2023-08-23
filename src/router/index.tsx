// AppRouter.tsx
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeList from '@/pages/RecipeList';
import RecipeDetail from '@/pages/RecipeDetail';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RecipeList} />
        <Route path="/recipe/:id" Component={RecipeDetail} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;