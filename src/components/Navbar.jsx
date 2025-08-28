import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import logo from '../assets/clip.png'
import { HandHelping } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white">
        <div className="flex gap-5 items-center flex-1">
            <img src={logo} alt="ABM logo" className="w-15"/>
            <h3 className="text-lg font-alex">ABM Productions</h3>
        </div>
        <NavigationMenu className="flex-2">
            <NavigationMenuList>
                {/* Home (simple link) */}
                <NavigationMenuItem>
                <NavigationMenuLink href="/" className="px-3 py-2 text-[16px] hover:bg-transparent hover:text-white">
                    Home
                </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About (simple link) */}
                <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="px-3 py-2 text-[16px] hover:bg-transparent hover:text-white">
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
                        <NavigationMenuLink href="/services/web">
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
                        Praise Team Revivals 
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
        <div className="flex-1 text-end flex justify-end">
            <button className="btn flex gap-2.5">
                Consult
                <HandHelping />
            </button>
        </div>
        
    </nav>
    
  )
}
