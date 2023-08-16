import { useEffect, useRef, useState } from "react";

import CardProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/Counter";
import Button from "../components/Elements/Button";

import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const token = localStorage.getItem("token");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("");

  // component did mount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    token ? setUser(getUsername(token)) : (window.location.href = "/login");
  }, []);

  // component did update
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id); // to get price beacuse cart only save id & qty
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // get from API
  useEffect(() => {
    getProducts((data) => setProducts(data));
  }, []);

  const handleAddToCart = (id) => {
    if (cart.find((f) => f.id === id)) {
      setCart(cart.map((m) => (m.id === id ? { ...m, qty: m.qty + 1 } : m)));
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-cyan-500">
      {user && (
        <div className="bg-white px-4 pb-2 flex justify-end items-center gap-4">
          <h5 className="font-medium pt-2">{user}</h5>
          <Button
            bgColor="bg-slate-900 hover:bg-slate-300"
            textColor="text-slate-100 hover:text-slate-900"
            onClick={() => handleLogout()}>
            Sign out
          </Button>
        </div>
      )}
      <div className="flex gap-1">
        <div className="flex flex-wrap gap-2 px-2 w-3/4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <div>
                <CardProduct.Header
                  imageSource={product.image}
                  alt={product.title}
                />
                <CardProduct.Body
                  title={`${product.title.substring(0, 20)}${
                    product.title.length > 20 ? "..." : null
                  }`}>
                  {product.description.substring(0, 150)}
                  {product.description.length > 150 ? "..." : null}
                </CardProduct.Body>
              </div>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="py-4 px-2 w-min-content w-1/4">
          <h5 className="ml-2 font-semibold">Cart</h5>

          {products.length > 0 && cart.length > 0 ? (
            <table className="text-xs border-separate border-spacing-2 border-0">
              <thead className="text-left">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <tr key={product.id}>
                      <td>
                        {product.title.substring(0, 20)}
                        {product.title.length > 20 ? "..." : null}
                      </td>
                      <td>
                        ${" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th colSpan={3} className="text-left">
                    Total Price
                  </th>
                  <td>
                    ${" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <h5 className="pl-2">Tidak ada item.</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
