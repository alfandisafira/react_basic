import { useEffect, useState } from "react";

import CardProduct from "../components/Fragments/CardProduct";
import Navbar from "../components/Fragments/Navbar";
import TableCart from "../components/Fragments/TableCart";

import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  // get from API
  useEffect(() => {
    getProducts((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-cyan-500">
      <Navbar />
      <div className="flex gap-1">
        <div className="flex flex-wrap gap-2 px-2 w-3/4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <div>
                <CardProduct.Header
                  imageSource={product.image}
                  alt={product.title}
                  id={product.id}
                />
                <CardProduct.Body
                  title={`${product.title.substring(0, 20)}${
                    product.title.length > 20 ? "..." : null
                  }`}>
                  {product.description.substring(0, 150)}
                  {product.description.length > 150 ? "..." : null}
                </CardProduct.Body>
              </div>
              <CardProduct.Footer price={product.price} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="py-4 px-2 w-min-content w-1/4">
          <h5 className="ml-2 font-semibold">Cart</h5>
          <TableCart products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
