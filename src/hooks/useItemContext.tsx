import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Item } from "@/types";

// const ItemContext = createContext({
//   // TODO: might be a better way to set this for types
//   // Actually, we shouldn't put these here because we don't want any of these to even be available if the context is consumed Outside of a provider.  So, these default values would be what is available if this is consumed outside of a provider, but we DON'T want this to be consumed outside of a provider ever.
//   selectedItem: {},
//   setSelectedItem: () => {},
//   clearSelectedItem: () => {},
//   // allItems: [], // maybe better to keep in react-query instead
//   // filteredItems: [],
// });

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
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

interface ItemContext {
  selectedItem: Item | null | undefined;
  clearSelectedItem: () => void;
  setSelectedItem: (item: Item | null) => void;
}

export const [useItemContext, CtxProvider] = createCtx<ItemContext>();

export const ItemContextProvider = (props: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>();
  const clearSelectedItem = () => setSelectedItem(null);

  return (
    <CtxProvider value={{ selectedItem, setSelectedItem, clearSelectedItem }}>
      {props.children}
    </CtxProvider>
  );
};

// export const useItemContext = () => useContext(ItemContext);
