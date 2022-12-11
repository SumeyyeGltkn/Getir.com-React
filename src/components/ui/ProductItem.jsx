import { HiOutlinePlus } from "react-icons/hi";

export default function ProductItem({ product }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center p-3">
      <button className="absolute top-1 right-1 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg transition-colors text-brand-color  hover:text-purple hover:border-brand-yellow">
        <HiOutlinePlus />
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-sm font-semibold text-brand-color">
        {product.price}
      </div>
      <div className="text-sm font-semibold text-gray-700">{product.title}</div>
      <div className="text-sm font-semibold text-gray-400">{product.alt}</div>
    </div>
  );
}
