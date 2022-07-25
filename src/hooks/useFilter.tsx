import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface FilterResultsContext {
  query: string;
  setQuery: (query: string | undefined) => void;
  imagesOnly: boolean;
  toggleImagesOnly: (v: boolean) => void;
  selectedTags: string[];
  toggleSelectedTag: (tag: string) => void;
  reset: () => void;
}

const FilterResultsContext = createContext<Partial<FilterResultsContext>>({});

export const FilteredResultsProvider = (props: { children: ReactNode }) => {
  const [query, setQuery] = useState<string | undefined>("");
  const [imagesOnly, setImagesOnly] = useState(false);
  const toggleImagesOnly = () => setImagesOnly((v) => !v);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const toggleSelectedTag = (tag: string) => {
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
