import { MainLayout } from "shared/ui";
import { Sidebar } from "widgets/sidebar/ui";

const CalendarPage = () => {
  return (
    <>
    <MainLayout
    sidebar={<Sidebar/>}
    header={<div>Header</div>}
    >
      <h1>Calendar Page!</h1>
    </MainLayout>
    </>
  );
};

export default CalendarPage;