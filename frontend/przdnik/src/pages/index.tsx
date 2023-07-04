import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./layout"));
const HomePage = lazy(() => import("./homePage"));
const SearchPage = lazy(() => import("./searchPage"));
const CollectionPage = lazy(() => import("./collectionPage"));
const CalendarPage = lazy(() => import("./calendarPage"));
const ProfilePage = lazy(() => import("./profilePage"));
const NotFoundPage = lazy(() => import("./notFoundPage"));

export const Routing = () => {
    return (
        <Routes>
          <Route path="*" element={<NotFoundPage/>}></Route>
          <Route path="" element={<Layout/>}>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/search" element={<SearchPage/>}></Route>
            <Route path="/collection" element={<CollectionPage/>}></Route>
            <Route path="/calendar" element={<CalendarPage/>}></Route>
            <Route path="/profile" element={<ProfilePage/>}></Route>
          </Route>
        </Routes>
    );
};