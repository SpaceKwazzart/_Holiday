import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./homePage"));
const SearchPage = lazy(() => import("./searchPage"));
const CollectionPage = lazy(() => import("./collectionPage"));
const CalendarPage = lazy(() => import("./calendarPage"));
const NotFoundPage = lazy(() => import("./notFoundPage"));

export const Routing = () => {
    return (
        <Routes>
          <Route path="" element={<HomePage/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/collection" element={<CollectionPage/>}></Route>
          <Route path="/calendar" element={<CalendarPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
    );
};