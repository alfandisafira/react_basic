import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs flex flex-col justify-between bg-zinc-200 bg-opacity-30 p-6 rounded-xl mt-4">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { imageSource, alt } = props;
  return (
    <div>
      <a href={imageSource} target="_blank" className="flex justify-center">
        <img className="rounded-md w-28 h-28" src={imageSource} alt={alt} />
      </a>
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="mt-4 text-center">
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="text-sm mt-1">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id, handleAddToCart } = props;
  return (
    <div className="flex justify-between items-center">
      <h5 className="font-semibold pt-2">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </h5>
      <Button
        bgColor="bg-slate-900 hover:bg-slate-300"
        textColor="text-slate-100 hover:text-slate-900"
        onClick={() => handleAddToCart(id)}>
        Buy now
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
