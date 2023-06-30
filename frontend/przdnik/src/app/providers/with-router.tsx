import LoadingPage from "pages/loadingPage";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={<LoadingPage/>}>
            {component()}
        </Suspense>
    </BrowserRouter>
);
