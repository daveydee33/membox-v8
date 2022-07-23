import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

const FilterResultsContext = createContext({
  // // TODO: might be a better way to set this for types
  // query: "",
  // setQuery: () => {},
});

export const FilteredResultsProvider = (props: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  const [imagesOnly, setImagesOnly] = useState(false);
  const toggleImagesOnly = () => setImagesOnly((v) => !v);

  return (
    <FilterResultsContext.Provider
      value={{ query, setQuery, imagesOnly, toggleImagesOnly }}
    >
      {props.children}
    </FilterResultsContext.Provider>
  );
};

export const useFilter = () => useContext(FilterResultsContext);
