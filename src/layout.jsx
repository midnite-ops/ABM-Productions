import { SidebarProvider } from "@/components/ui/sidebar";
import  AppSidebar  from "./components/AppSidebar";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <SidebarProvider defaultOpen= {false}>
     
      <main className="w-full min-h-screen"> {/* Added min-h-screen for better main content height */}
         <AppSidebar />
         <Outlet />
      </main>
    </SidebarProvider>
  );
}
