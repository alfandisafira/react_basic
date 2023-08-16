import Navbar from "../components/Fragments/Navbar";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const user = useLogin();

  return (
    <div className="min-h-screen bg-cyan-500">
      {user && <Navbar user={user} />}
    </div>
  );
};

export default ProfilePage;
