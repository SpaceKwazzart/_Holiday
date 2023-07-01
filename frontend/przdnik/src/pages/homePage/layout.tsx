import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar/ui";
import { MainLayout } from "shared/ui";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<Header/>}
    >
      {children}
    </MainLayout>
    </>
  );
}
 
export default Layout;