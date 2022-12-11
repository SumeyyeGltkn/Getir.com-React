import { useEffect } from "react";
import { useState } from "react";
import Products from "../api/products.json";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 ">Kampanyalar</h3>
      <div className="grid  grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
      </div>
    </div>
  );
}
