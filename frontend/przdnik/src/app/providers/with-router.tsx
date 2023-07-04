import Layout from "pages/layout";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={
      <Layout>
        <div></div>
      </Layout>
    }>
      {component()}
    </Suspense>
  </BrowserRouter>
);
