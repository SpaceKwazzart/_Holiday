import { MainLayout } from "shared/ui";
import { Sidebar } from "widgets/sidebar/ui";

const SearchPage = () => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<div>Header</div>}
    >
      <h1>Search Page!</h1>
    </MainLayout>
    </>
  );
};

export default SearchPage;