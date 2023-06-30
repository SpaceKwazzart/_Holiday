import { MainLayout } from "shared/ui";
import { Sidebar } from "widgets/sidebar/ui";

const CollectionPage = () => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<div>Header</div>}
    >
      <h1>Collection Page!</h1>
    </MainLayout>
    </>
  );
};

export default CollectionPage;