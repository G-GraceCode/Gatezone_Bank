'use client'
import Link from "next/link"
import {cn} from "@/lib/utils"
import Image from "next/image"
import {sidebarLinks} from "@/constants"
import { usePathname } from "next/navigation"
import Footer from "./Footer";
import PlaidLink from "./PlaidLink"

const SideBar = ({user}: SiderbarProps) => {
  const pathname = usePathname();
  console.log("pathname", pathname)
  return (
    <section className="sidebar z-10">
      <nav className='flex flex-col gap-4'>
        <Link href="/" className="flex mb-10.5 cursor-pointer items-center gap-2">
            <Image 
             src="/icons/logo.svg"
             width={35} 
             height={35} 
             alt={"GateZone"}
             className="size-[24px] max-xl:size-14"
             />
             <h1 className="sidebar-logo">GateZone</h1>
        </Link>

        <div>
          
        </div>

        {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return (
              <Link href={item.route} key={item.label} className={cn('sidebar-link', {"bg-bank-gradient" : isActive})}>
                <div className="relative size-6">
                  <Image 
                    src = {item.imgURL} 
                    alt = {item.label}
                    fill
                    className={cn({'brightness-[3] invert-0': isActive})}
                  />
                </div>
                <p className={cn('sidebar-label', {"!text-white" : isActive})}>{item.label}</p>
              </Link>
            )
  
        })}
        
       <PlaidLink user={user} />
      </nav>

      <Footer user={user} type="mobile" />
    </section>
  )
}

export default SideBar
