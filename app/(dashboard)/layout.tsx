import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      <div className="h-[60rem] container py-6 flex gap-4">
      <Sidebar></Sidebar>
      {children}
    </div>
    </>
  );
};

export default dashboardLayout;
