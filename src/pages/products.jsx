import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-cyan-500">
      <div className="flex justify-center">
        {/* <div className="w-full max-w-xs bg-zinc-200 bg-opacity-30 p-6 rounded-xl mt-4">
          <a href="#">
            <img src="/assets/images/91374.jpg" alt="" />
          </a>
          <div className="mt-4">
            <h1 className="font-semibold">Macbook Pro M1 2020</h1>
            <p className="text-justify font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, voluptatum. Officia architecto magnam ratione ipsum.
            </p>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <h2 className="font-semibold pt-2">Rp. 15.000.000</h2>
            <Button bgColor="bg-slate-900 hover:bg-slate-500">Buy now</Button>
          </div>
        </div> */}
        <CardProduct>
          <CardProduct.Header imageSource="/assets/images/91374.jpg" />
          <CardProduct.Body title="Macbook Pro M1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quaerat optio error laboriosam consequuntur voluptates.
          </CardProduct.Body>
          <CardProduct.Footer price="Rp. 15.000.000" />
        </CardProduct>
      </div>
    </div>
  );
};

export default ProductPage;
