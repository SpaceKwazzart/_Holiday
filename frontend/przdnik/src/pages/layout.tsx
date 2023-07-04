import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar/ui";
import { MainLayout } from "shared/ui";
import { Outlet } from 'react-router';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<Header/>}
    >
      {
        children
        ?
        children
        :
        <Outlet/>
      }
    </MainLayout>
    </>
  );
}
 
export default Layout;