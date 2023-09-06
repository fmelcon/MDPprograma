import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = ()=>{
const currentRoute = usePathname();
const linkhref='className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900';
const activeStyle = linkhref+' bg-white-400';
const inactiveStyle = linkhref+'text-white';
console.log(currentRoute)

return(
        <nav className='h-[56px] flex justify-center items-center bg-orange-200 space-x-4'>
        <Link href='/about'className={(currentRoute === '/about')? activeStyle : inactiveStyle } >About</Link>
        <Link href='/' className={(currentRoute === '/')? activeStyle : inactiveStyle }>Home</Link>
        <Link href='/contact' className={(currentRoute === '/contact')? activeStyle : inactiveStyle }>Contact</Link>
        </nav>
    );
}
export default NavBar();