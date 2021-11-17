import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { currentState, PrivateRoute } from "@/presentation/components";

const Router: React.FC = () => {
  const state = {};
  return (
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, state)}>
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
