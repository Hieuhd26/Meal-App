import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export function FavoritesContextProvider({ children }) {
  const [favoritesMealsId, setFavoritesMealsId] = useState([]);

  function addFavorite(id) {
    setFavoritesMealsId((current) => {
      return [...current, id];
    });
  }

  function removeFavorite(id) {
    setFavoritesMealsId((current) => {
      return current.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: favoritesMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
