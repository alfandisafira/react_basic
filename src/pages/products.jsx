import CardProduct from "../components/Fragments/CardProduct";

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
  return (
    <div className="min-h-screen bg-cyan-500">
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
    </div>
  );
};

export default ProductPage;
