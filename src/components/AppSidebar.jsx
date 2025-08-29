import { Anchor, BadgeCheck, CircleQuestionMark, Home, HomeIcon, X } from 'lucide-react'
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
  SidebarMenuItem, } from './ui/sidebar'



const menu = [
  {
    title: 'Home',
    url: '#Home',
    icon: Home
  },
  {
    title: 'About',
    url: '#About',
    icon: BadgeCheck
  },
  {
    title: 'Services',
    url: '#Services',
    icon: Anchor
  },
  {
    title: 'Contact Us',
    url: '#Contact-Us',
    icon: CircleQuestionMark
  }
]

export default function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar className='z-50'>
      <SidebarContent className="w-64">
        <SidebarGroup>
          <SidebarGroupLabel className='flex justify-between mb-5'>
            ABM Productions
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className='hover:bg-transparent hover:text-inherit focus-visible:ring-0 active:bg-transparent bg-transparent'
            >
              <X className="h-5 w-5" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title} onClick={toggleSidebar}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
