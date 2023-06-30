import { MainLayout } from "shared/ui";
import { Sidebar } from "widgets/sidebar/ui";

const HomePage = () => {
  return (
    <>
    <MainLayout
    sidebar={
    <Sidebar/>
    }
    header={<div>Header</div>}
    >
      <h1>Home Page!</h1>
    </MainLayout>
    </>
  );
};

export default HomePage;