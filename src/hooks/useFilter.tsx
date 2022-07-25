import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
 */
function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

interface FilterResultsContext {
  query: string;
  setQuery: (query: string) => void;
  imagesOnly: boolean;
  toggleImagesOnly: () => void;
  selectedTags: string[];
  toggleSelectedTag: (tag: string) => void;
  reset: () => void;
}

export const [useFilter, CtxProvider] = createCtx<FilterResultsContext>();

export const FilteredResultsProvider = (props: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
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
    <CtxProvider
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
    </CtxProvider>
  );
};
