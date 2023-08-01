import { useRouteError } from "react-router-dom";
import Intro from "../components/Elements/Intro";
import AuthLayout from "../components/Layouts/AuthLayout";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-100">
      {error ? (
        <div>
          <p className="text-center">{error.status}</p>
          <p className="text-center">{error.statusText || error.message}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-center">Opps, sorry.</h1>
          <p className="text-center">Something error.</p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
