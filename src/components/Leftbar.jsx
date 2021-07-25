import { useData } from "../contexts";

export function Leftbar() {
  const { dispatch, sortBy, selectedSize, selectedBrand, selectedGender } =
    useData();
  return (
    <div className="fixed top-20 left-0 w-1/5 h-screen border-r border-blue-500 flex flex-col justify-center items-center space-y-2 text-2xl">
      <h2 className="underline text-blue-500">Sort By</h2>
      <div className="">
        <input
          type="radio"
          name="sort"
          onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          checked={sortBy && sortBy === "HIGH_TO_LOW"}
        />
        High-to-Low{" "}
        <input
          type="radio"
          name="sort"
          onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          checked={sortBy && sortBy === "LOW_TO_HIGH"}
        />{" "}
        Low-to-High{" "}
      </div>

      <h2 className="underline text-blue-500">Filters</h2>
      <div>
        <div>
          <h3 className="underline text-blue-500">Size</h3>
          <input
            type="radio"
            name="filterSize"
            onChange={() => dispatch({ type: "FILTER_BY_SIZE", payload: "L" })}
            checked={selectedSize && selectedSize === "L"}
          />{" "}
          Large{" "}
          <input
            type="radio"
            name="filterSize"
            onChange={() => dispatch({ type: "FILTER_BY_SIZE", payload: "M" })}
            checked={selectedSize && selectedSize === "M"}
          />{" "}
          Medium{" "}
          <input
            type="radio"
            name="filterSize"
            onChange={() => dispatch({ type: "FILTER_BY_SIZE", payload: "S" })}
            checked={selectedSize && selectedSize === "S"}
          />{" "}
          Small{" "}
        </div>

        <div>
          <h3 className="underline text-blue-500">Brand</h3>
          <input
            type="radio"
            name="filterBrand"
            onChange={() =>
              dispatch({ type: "FILTER_BY_BRAND", payload: "Levis" })
            }
            checked={selectedBrand && selectedBrand === "Levis"}
          />{" "}
          Levis{" "}
          <input
            type="radio"
            name="filterBrand"
            onChange={() =>
              dispatch({ type: "FILTER_BY_BRAND", payload: "Madame" })
            }
            checked={selectedBrand && selectedBrand === "Madame"}
          />{" "}
          Madame{" "}
        </div>

        <div>
          <h3 className="underline text-blue-500">Ideal For</h3>
          <input
            type="radio"
            name="filterGender"
            onChange={() =>
              dispatch({ type: "FILTER_BY_GENDER", payload: "women" })
            }
            checked={selectedGender && selectedGender === "women"}
          />{" "}
          Women{" "}
          <input
            type="radio"
            name="filterGender"
            onChange={() =>
              dispatch({ type: "FILTER_BY_GENDER", payload: "men" })
            }
            checked={selectedGender && selectedGender === "men"}
          />{" "}
          Men{" "}
        </div>

        <button
          className="bg-blue-500 text-white rounded w-1/2 p-1"
          onClick={() => dispatch({ type: "RESET_STATE" })}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
