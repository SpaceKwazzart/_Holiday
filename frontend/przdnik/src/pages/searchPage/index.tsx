import { MainLayout } from "shared/ui";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar/ui";

const SearchPage = () => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<Header/>}
    >
      <h1>Search Page!</h1>
    </MainLayout>
    </>
  );
};

export default SearchPage;