"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/calls";
import { Product } from "@/lib/types";

export default function ProductsPage() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await getProducts();
        console.log(products);
        setProduct(products.data);
      } catch (err) {
        console.error(err);
      }
    }
    loadProducts();
  }, []);

  return (
    <div>
      {product.map((prod, index) => (
        <div key={index}>{prod.title}</div>
      ))}
    </div>
  );
}
