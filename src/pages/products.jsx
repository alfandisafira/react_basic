import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Macbook Pro m1",
    price: "Rp. 15.000.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus voluptatum quas iure minus, vel recusandae autem repudiandae magni atque facilis inventore, nesciunt corrupti officia? Mollitia laborum alias totam ipsam?",
    imageSource: "/assets/images/91374.jpg",
  },
  {
    id: 2,
    title: "Asus Vivobook",
    price: "Rp. 7.000.000",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque nemo sapiente est. Corrupti, aliquam sit!",
    imageSource: "/assets/images/91374.jpg",
  },
  {
    id: 3,
    title: "Lenovo Legion",
    price: "Rp. 12.000.000",
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
  return (
    <div className="min-h-screen bg-cyan-500">
      {user && (
        <div className="bg-white px-4 pb-2 flex justify-end items-center gap-4">
          <h5 className="font-medium pt-2">{user}</h5>
          <Button
            bgColor="bg-slate-900 hover:bg-slate-300"
            textColor="text-slate-100 hover:text-slate-900"
            onClick={() => handleLogout}>
            Sign out
          </Button>
        </div>
      )}
      <div className="flex justify-center gap-4">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <div>
              <CardProduct.Header imageSource={product.imageSource} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
            </div>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <Counter />
    </div>
  );
};

export default ProductPage;
