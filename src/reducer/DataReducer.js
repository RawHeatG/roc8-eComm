import { initialState } from "../contexts/DataContext";

export function dataReducer(state, { type, payload }) {
  switch (type) {
    case "SORT":
      return {
        ...state,
        sortBy: payload,
      };

    case "FILTER_BY_SIZE":
      return {
        ...state,
        selectedSize: payload,
      };

    case "FILTER_BY_BRAND":
      return {
        ...state,
        selectedBrand: payload,
      };

    case "FILTER_BY_GENDER":
      return {
        ...state,
        selectedGender: payload,
      };

    case "RESET_STATE":
      return initialState;
    default:
      console.error("Invalid Action type");
  }
}
