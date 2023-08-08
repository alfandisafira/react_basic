import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-zinc-200 bg-opacity-30 p-6 rounded-xl mt-4">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { imageSource } = props;
  return (
    <div>
      <a href="#">
        <img className="rounded-md" src={imageSource} alt="" />
      </a>
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="mt-4">
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="text-sm mt-1">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="mt-2 flex justify-between items-center">
      <h5 className="font-semibold pt-2">{price}</h5>
      <Button bgColor="bg-slate-900 hover:bg-slate-500">Buy now</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
