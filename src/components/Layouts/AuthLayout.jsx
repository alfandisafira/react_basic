const AuthLayout = (props) => {
  return (
    <div className="flex justify-center mb-2">
      <div className="mt-16 px-8 py-4 bg-zinc-200 bg-opacity-30 rounded-xl">
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
