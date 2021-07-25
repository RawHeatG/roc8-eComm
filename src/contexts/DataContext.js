import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer";
import productData from "../utils/productData";
console.log({ productData });

const DataContext = createContext();

export const initialState = {
  products: productData.products,
  sortBy: null,
  selectedSize: null,
  selectedBrand: null,
  selectedGender: null,
};

export function DataProvider({ children }) {
  const [
    { products, sortBy, selectedSize, selectedBrand, selectedGender },
    dispatch,
  ] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider
      value={{
        products,
        sortBy,
        selectedSize,
        selectedBrand,
        selectedGender,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
