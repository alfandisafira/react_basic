import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";
import { getProductDetail } from "../services/product.service";

import Navbar from "../components/Fragments/Navbar";

const ProductDetailPage = () => {
  const { id } = useParams();
  const user = useLogin();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductDetail(id, (data) => {
      setProduct(data);
    });
  }, []);

  console.log(product);

  return (
    <div className="min-h-screen bg-cyan-500">
      {user && <Navbar user={user} />}
      {Object.keys(product).length > 0 && (
        <div className="flex justify-center pt-20">
          <div className="flex font-sans w-1/2">
            <div className="flex relative w-1/3 items-center justify-center">
              <img
                src={product.image}
                alt=""
                className="rounded-xl max-h-40"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6 w-2/3">
              <div className="flex justify-between">
                <div className="w-4/5">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {product.title}
                  </h1>
                </div>
                <div className="text-lg font-semibold text-slate-900 w-1/5 text-right">
                  $ {product.price}
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <p>{product.description}</p>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium justify-between items-center">
                <div className="text-sm font-medium text-slate-700">
                  Review {product.rating.rate}/5 ({product.rating.count})
                </div>
                <Link
                  to="/products"
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white flex items-center"
                  type="submit">
                  Back to Products
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
