import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const NotFoundPage = lazy(() => import("./notFoundPage"))

export const Routing = () => {
    return (
        <Routes>
          <Route path="" element={<HomePage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
    );
};