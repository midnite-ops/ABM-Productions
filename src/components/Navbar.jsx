import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { SidebarTrigger } from "./ui/sidebar"
import logo from '../assets/clip.png'
import { HandHelping, MenuIcon } from "lucide-react"
import { useLocation } from "react-router-dom"

export default function Navbar() {

    const location = useLocation().pathname === '/' ? false : true
  return (
    <nav className={`flex items-center text-white w-full ${location ? 'bg-dRed padded' : ''}`}>
        <div className="flex gap-5 items-center flex-1">
            <img src={logo} alt="ABM logo" className="w-15"/>
            <h3 className="lg:text-lg text-sm font-alex">ABM Productions</h3>
        </div>
        <SidebarTrigger className='lg:hidden' size={40}/>
        
        <NavigationMenu className="flex-2 hidden lg:block">
            <NavigationMenuList>
                {/* Home (simple link) */}
                <NavigationMenuItem>
                <NavigationMenuLink href="/" className="px-3 py-2 text-[16px] hover:bg-transparent hover:text-white">
                    Home
                </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About (simple link) */}
                <NavigationMenuItem>
                <NavigationMenuLink href="#about" className="px-3 py-2 text-[16px] hover:bg-transparent hover:text-white">
                    About
                </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Services (dropdown) */}
                <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 bg-transparent text-[16px] ">
                    Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                    <ul className="grid gap-2 w-[200px]">
                    <li>
                        <NavigationMenuLink href="/Coaching">
                        Vocal Coaching
                        </NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink href="/services/mobile">
                        Worship Engagements
                        </NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink href="/services/design">
                        Music and Media
                        </NavigationMenuLink>
                    </li>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact (simple link) */}
                <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="px-3 py-2 text-[16px] hover:bg-transparent hover:text-white">
                    Contact
                </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <div className="flex-1 text-end justify-end hidden lg:flex">
            <button className={`btn gap-2.5 flex ${location ? 'bg-white text-dRed' : ''}`}>
                Consult
                <HandHelping />
            </button>
        </div>
        
    </nav>
    
  )
}
