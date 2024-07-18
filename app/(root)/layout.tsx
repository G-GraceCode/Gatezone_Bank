import SideBar from "@/components/SideBar"
import Image from "next/image"
import MobileNav from "@/components/MobileNav"
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import {redirect} from "next/navigation"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const getUser = await getLoggedInUser();

  if(!getUser) redirect('/sign-in')

  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={getUser}/>
    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="menu-icon" />
        <div>
          <MobileNav user={getUser} />
        </div>
      </div>
   
      {children}  
     </div>
   </main>
  )
}
