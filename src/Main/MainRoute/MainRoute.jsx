import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
const Login = lazy(() => import("../../Resources/View/Login.jsx"));

import "./../MainStyle/Main.css";

function MainRouter() {
  return (
    <main id="MainRouterSection">
      <section className="MainRouterSection">
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </section>
    </main>
  );
}

export default MainRouter;
