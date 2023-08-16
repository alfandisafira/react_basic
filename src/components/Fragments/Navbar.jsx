import Button from "../Elements/Button";

const Navbar = (props) => {
  const { user } = props;
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="bg-white px-4 pb-2 flex justify-end items-center gap-4">
      <h5 className="font-medium pt-2">{user}</h5>
      <Button
        bgColor="bg-slate-900 hover:bg-slate-300"
        textColor="text-slate-100 hover:text-slate-900"
        onClick={() => handleLogout()}>
        Sign out
      </Button>
    </div>
  );
};

export default Navbar;
