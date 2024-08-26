import SideBar from "@/components/SideBar"
import Image from "next/image"
import MobileNav from "@/components/MobileNav"
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import {redirect} from "next/navigation"
import Link from "next/link"
import { Toaster } from 'react-hot-toast';

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
        <div>
          <MobileNav user={getUser} />
        </div>
        <Image src="/icons/logo.svg" width={30} height={30} alt="menu-icon" />
        <Link href="/" className="flex gap-2 items-center justify-center">
            <Image 
            src="/icons/plus.svg"
            width={20}
            height={20}
            alt="plus"
            />
            <h2 className="text-12 font-semibold text-gray-600">
                Add Bank
            </h2>
        </Link>
      </div>
   
      {children}  
    </div>
    <Toaster position="top-center"
        reverseOrder={false} />
   </main>
  )
}
