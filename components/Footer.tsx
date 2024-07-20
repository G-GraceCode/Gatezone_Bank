import React from "react"
import Image from "next/image"
import {useRouter} from "next/navigation"
import {signOut} from "@/lib/Actions/user.actions"

const Footer = ({user, type}: FooterProps) => {
    const router = useRouter()

    const handleLogOut = async () => {
        const isLogOut = await signOut()
        if(isLogOut) router.push("/sign-in")
    }

    return(
        <footer className="footer">
            {/* <div className=""> */}
                  <div className={`${type} === "mobile" ? "footer_name-mobile" : "footer_name"`}>
                      <span className="text-4xl font-bold text-blue-500">{user?.firstName[0]}</span>
                  </div>

                  <div className={`${type} === "mobile" ? "footer_name-mobile" : "footer_name"`}>
                      <h2 className='text-14 truncate text-gray-700 font-semibold'>
                      {`${user?.firstName} ${user?.lastName}`}
                      </h2>
                      <p className="text-12 truncate font-normal text-gray-600">
                      {user?.email}
                      </p>
                  </div>

            {/* </div> */}
            <div className="footer_image" onClick={handleLogOut}>
                <Image src="/icons/logout.svg" fill alt="signOut" />
            </div>

        </footer>
    )
}

export default Footer