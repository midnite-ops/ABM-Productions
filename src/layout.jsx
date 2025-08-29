import { SidebarProvider } from "@/components/ui/sidebar";
import  AppSidebar  from "./components/AppSidebar"; // Corrected import for named export

export default function Layout({ children }) {
  return (
    <SidebarProvider defaultOpen= {false}>
     
      <main className="w-full min-h-screen"> {/* Added min-h-screen for better main content height */}
         <AppSidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}
