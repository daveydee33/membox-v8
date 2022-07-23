import { ReactNode, useEffect } from "react";
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
  const [selectedTags, setSelectedTags] = useState([]);
  const toggleSelectedTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((val) => val.filter((a) => tag !== a));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const reset = () => {
    setQuery("");
    setImagesOnly(false);
    setSelectedTags([]);
  };

  return (
    <FilterResultsContext.Provider
      value={{
        query,
        setQuery,
        imagesOnly,
        toggleImagesOnly,
        selectedTags,
        toggleSelectedTag,
        reset,
      }}
    >
      {props.children}
    </FilterResultsContext.Provider>
  );
};

export const useFilter = () => useContext(FilterResultsContext);
