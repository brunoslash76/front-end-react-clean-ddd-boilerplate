import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentState } from "../atoms/atoms";

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentState);

  /**
   * @param getCurrentAccount
   * to prevente the creation of a non-opiniated
   * component I left it commented to implement
   * when needed.
   */

  return getCurrentAccount()?.accessToken ? (
    <Route {...props} />
  ) : (
    <Route {...props} component={() => <Redirect to="/login" />} />
  );
};

export default PrivateRoute;
