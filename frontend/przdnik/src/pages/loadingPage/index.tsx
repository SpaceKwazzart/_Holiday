import { MainLayout } from "shared/ui";
import { Sidebar } from "widgets/sidebar/ui";

const LoadingPage = () => {
  return (
    <>
    <MainLayout
    sidebar={
    <Sidebar/>
    }
    header={<div>Header</div>}
    >
      <h1>Loading...</h1>
    </MainLayout>
    </>
  );
};

export default LoadingPage;