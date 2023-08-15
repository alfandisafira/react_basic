import { useState } from "react";

import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Macbook Pro M1",
    price: 15000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus voluptatum quas iure minus, vel recusandae autem repudiandae magni atque facilis inventore, nesciunt corrupti officia? Mollitia laborum alias totam ipsam?",
    imageSource: "/assets/images/91374.jpg",
  },
  {
    id: 2,
    title: "Asus Vivobook",
    price: 7000000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nemo sapiente est. Corrupti, aliquam sit!",
    imageSource: "/assets/images/91374.jpg",
  },
  {
    id: 3,
    title: "Lenovo Legion",
    price: 12000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus voluptatum quas iure minus, vel recusandae autem repudiandae magni atque facilis inventore, nesciunt corrupti officia? Mollitia laborum alias totam ipsam?",
    imageSource: "/assets/images/91374.jpg",
  },
];

const ProductPage = () => {
  const user = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const [cart, setCart] = useState([]);

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
      <div className="flex flex-wrap gap-1">
        <div className="flex flex-wrap gap-2 px-2 w-6/8">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <div>
                <CardProduct.Header imageSource={product.imageSource} />
                <CardProduct.Body title={product.title}>
                  {product.description}
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
        <div className="py-4 px-2 w-min-content">
          <h5 className="ml-2 font-semibold">Cart</h5>

          {cart.length > 0 ? (
            <table className="text-xs border-separate border-spacing-2 border-0">
              <thead className="text-left">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>
                        Rp.{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        Rp.{" "}
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h5 className="pl-2">Tidak ada item.</h5>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Counter />
      </div>
    </div>
  );
};

export default ProductPage;
