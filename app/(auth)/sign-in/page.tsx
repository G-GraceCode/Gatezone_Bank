import React from "react"
import AuthForm from "@/components/AuthForm"
import Image from "next/image"


const SignIn = () => {
    return (
       <section className="flex flex-center size-full max-sm:px-6">
        
         <AuthForm type="sign-in" />
       </section>
    )
}

export default SignIn