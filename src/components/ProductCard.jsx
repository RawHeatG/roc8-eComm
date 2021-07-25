export function ProductCard({ product }) {
  const { name, price, imgUrl, rating, brand, size } = product;
  return (
    <div className="border border-blue-200 rounded p-2 flex flex-col m-2 text-xl">
      <img className=" w-auto h-96 object-scale-down" src={imgUrl} alt={name} />
      <h2 className="text-2xl font-bold">{name}</h2>
      <h2>₹{price}</h2>
      <h2>{rating} ⭐</h2>
      <h2>Size: {size}</h2>

      <h2>By - {brand}</h2>
    </div>
  );
}
