import { useEffect, useState } from "react";

export const useLocalStorage = (itemToSet) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(itemToSet)) || {}
  );
  useEffect(() => {
    localStorage.setItem(itemToSet, JSON.stringify(items));
  }, [items]);

  const addItemToStorage = (id) => {
    setItems((prevItem) => {
      const updatedItem = { ...prevItem };
      if (updatedItem[id] !== undefined) delete updatedItem[id];
      else updatedItem[id] = true;
      return updatedItem;
    });
  };
  return [items, addItemToStorage];
};
