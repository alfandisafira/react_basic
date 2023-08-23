import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  // component did update
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id); // to get price beacuse cart only save id & qty
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <table
      className={`text-xs border-separate border-spacing-2 border-0 ${
        isDarkMode ? "text-white" : "text-black"
      }`}>
      <thead className="text-left">
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
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
            {total.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
