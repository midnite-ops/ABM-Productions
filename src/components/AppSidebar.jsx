import { useState } from "react"
import { 
  HandCoins, 
  BadgeInfo, 
  ContactRound, 
  Home, 
  X, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, 
} from "./ui/sidebar"

// main menu
const menu = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "#About", icon: BadgeInfo },
  { title: "Services", url: "#Services", icon: HandCoins, dropdown: true },
  { title: "Contact Us", url: "/Contact", icon: ContactRound }
]

// submenu for Services
const servicesSubmenu = [
  { title: "Voice Coaching", url: "/Coaching" },
  { title: "Music and Media", url: "#speech" },
  { title: "Worship Engagements", url: "#choir" }
]

export default function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <Sidebar className="z-50">
      <SidebarContent className="w-64">
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between mb-5 text-sm font-alex">
            ABM Productions
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="hover:bg-transparent hover:text-inherit focus-visible:ring-0 active:bg-transparent bg-transparent"
            >
              <X className="h-5 w-5 hover:cursor-pointer" />
            </Button>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.dropdown ? (
                    <>
                      {/* dropdown toggle */}
                      <SidebarMenuButton
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="flex justify-between items-center"
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="w-4 text-black"/>
                          {item.title}
                        </span>
                        {openDropdown ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </SidebarMenuButton>

                      {/* submenu */}
                      {openDropdown && (
                        <div className="ml-6 mt-1 flex flex-col gap-1">
                          {servicesSubmenu.map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.url}
                              onClick={toggleSidebar}
                              className="block rounded px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton asChild onClick={toggleSidebar}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
