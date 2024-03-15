import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../../utils/consts";

const AppRouter = () => {
  const user = false;

  return (
    <Routes>
      {user
        ? privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))
        : publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
      <Route
        path="*"
        element={<Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
