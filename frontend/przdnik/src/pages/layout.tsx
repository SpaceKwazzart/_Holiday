import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar/ui";
import { MainLayout } from "shared/ui";
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<Header/>}
    >
      <Outlet/>
    </MainLayout>
    </>
  );
}
 
export default Layout;