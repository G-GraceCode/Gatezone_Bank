import React from "react"
import AuthForm from "@/components/AuthForm"
import Image from "next/image"


const SignUp = async () => {
    
    return (
        <section className="flex flex-center size-full max-sm:px-6">
         
         <AuthForm type="sign-up" />
       </section>
    )
}

export default SignUp