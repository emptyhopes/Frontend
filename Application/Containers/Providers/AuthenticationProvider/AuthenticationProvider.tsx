import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PropsInterface } from "@/Application/Containers/Providers/AuthenticationProvider/Types/PropsInterface";

import { UseApplicationDispatch } from "@/Application/Ship/Store/Hooks/UseApplicationDispatch";
import { AuthenticationActions } from "@/Application/Containers/Store/Authentication/Slices/Slice";

import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

const AuthenticationProvider: React.FunctionComponent<PropsInterface> = (props: PropsInterface): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = UseApplicationDispatch();

  const [RefreshMiddleware] = AuthenticationMiddleware.useRefreshMutation();

  const RefreshFunction = () => {
    const response = RefreshMiddleware("").unwrap();

    response.then((response) => {
      dispatch(
        AuthenticationActions.SetUser({
          uid: response.user.id,
          email: response.user.email,
          accessToken: response.accessToken,
        }),
      );

      navigate("/");
    });

    response.catch(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      RefreshFunction();
    }
  }, []);

  return <>{props.children}</>;
};

export { AuthenticationProvider };
