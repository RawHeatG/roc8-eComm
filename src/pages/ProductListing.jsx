import { Leftbar, Navbar, ProductCard } from "../components";
import { useData } from "../contexts";

export function ProductListing() {
  const { products, sortBy, selectedSize, selectedBrand, selectedGender } =
    useData();
  console.log(products, sortBy, selectedSize, selectedBrand, selectedGender);
  const getSortedData = (products) => {
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return products
        .slice()
        .sort((product1, product2) => product2.price - product1.price);
    }

    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return products
        .slice()
        .sort((product1, product2) => product1.price - product2.price);
    }

    return products;
  };
  const getFilteredData = (products) => {
    return products
      .filter((product) =>
        selectedSize
          ? product.size === selectedSize
            ? product
            : false
          : product
      )
      .filter((product) =>
        selectedBrand
          ? product.brand === selectedBrand
            ? product
            : false
          : product
      )
      .filter((product) =>
        selectedGender
          ? product.gender === selectedGender
            ? product
            : false
          : product
      );
  };

  const sortedData = getSortedData(products);
  const sortedAndFilteredData = getFilteredData(sortedData);
  return (
    <div>
      <Navbar />
      <Leftbar />
      <div className="grid grid-cols-3 relative left-1/4 top-20 w-3/4">
        {sortedAndFilteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
