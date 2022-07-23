import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

// const ItemContext = createContext({
//   // TODO: might be a better way to set this for types
//   // Actually, we shouldn't put these here because we don't want any of these to even be available if the context is consumed Outside of a provider.  So, these default values would be what is available if this is consumed outside of a provider, but we DON'T want this to be consumed outside of a provider ever.
//   selectedItem: {},
//   setSelectedItem: () => {},
//   clearSelectedItem: () => {},
//   // allItems: [], // maybe better to keep in react-query instead
//   // filteredItems: [],
// });
const ItemContext = createContext({});

export const ItemContextProvider = (props: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState({});
  const clearSelectedItem = () => setSelectedItem({});

  return (
    <ItemContext.Provider
      value={{ selectedItem, setSelectedItem, clearSelectedItem }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);
