import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.error?.message}</p>
    </div>
  );
}

export default Error;
