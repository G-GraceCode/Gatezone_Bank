import Image from "next/image"
import { Toaster } from 'react-hot-toast';


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main className="flex min-h-screen w-full justify-between font-inter"> 
        <div className="auth-asset"> 
          <div>
            <Image
            src="/icons/websites.svg"
            alt="Auth image"
            width={650}
            height={650}
            />
          </div>
        </div>
        {children}
        <Toaster position="top-center"
          reverseOrder={false} />
     </main>
    )
  }
  