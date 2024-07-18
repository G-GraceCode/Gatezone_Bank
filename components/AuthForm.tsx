'use client'
import React, {useState} from 'react';
import {useRouter} from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CostumInput from "./CostumInput"
import {authFormSchema} from "@/lib/utils"
import { Loader2 } from 'lucide-react';
import {signUp, signIn} from "@/lib/Actions/user.actions"

const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    //router if user details = correct then logged in
    const router = useRouter()

    //formSchema
    const formaSchema = authFormSchema(type)

     // 1. Define your form.
    const form = useForm<z.infer<typeof formaSchema>>({
        resolver: zodResolver(formaSchema),
        defaultValues: {
        email: "",
        password: ""
        },
    })
 
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formaSchema>) => {
          // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        try{
            //Sign up with Appwrite & create plaid token in nextjs using server actions & mutations
            
            if(type === "sign-up"){
                const newUser = await signUp(data);

                setUser(newUser)
            }
            if(type === "sign-in"){
                const res = await signIn({
                    email: data.email,
                    password: data.password,
                });

                if(res) router.push("/")
            }
            
        } catch(e){
            console.log(e)
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <section className='auth-form'>
      <header className="flex flex-col gap-5 md:gap">
      <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
            <Image 
             src="/icons/logo.svg"
             width={24} 
             height={24} 
             alt={"GateZone"}
             className="size-[24px] max-xl:size-14"
             />
             <h1 className="sidebar-logo">GateZone</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
                <p className="text-16 font-normal text-gray-600">
                    {user ? "link account to get started" : "Please enter your details"}
                </p>
            </h1>
        </div>

      </header>
      {
        user ? (
            <div className="flex flex-col gap-4">
                {/*PlaidLink  */}
            </div>
        ) : (
           <> <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               {
                type === "sign-up" && (
                    <>
                        <div className="flex gap-4">
                            <CostumInput 
                            control={form.control} 
                            name="firstName"
                            placeholder="Enter your first name"
                            label = "First Name"
                            />
                            <CostumInput 
                            control={form.control} 
                            name="lastName"
                            placeholder="Enter your last name"
                            label = "Last Name"
                            />
                        </div>
                     
                            <CostumInput 
                            control={form.control} 
                            name="address1"
                            placeholder="Enter your specific Address"
                            label = "Address"
                            />
                            <CostumInput 
                            control={form.control} 
                            name="city"
                            placeholder="Enter your specific City"
                            label = "City"
                            />
                            <div className="flex gap-4">  
                                 <CostumInput 
                                control={form.control} 
                                name="state"
                                placeholder="Example: NY"
                                label = "State"
                                />
                       
                            <CostumInput 
                            control={form.control} 
                            name="postalCode"
                            placeholder="Example: 0000"
                            label = "Postal Code"
                            /> 
                            </div>
                          <div className="flex gap-4">   
                            <CostumInput 
                            control={form.control} 
                            name="dataOfBirth"
                            placeholder="YYYY-MM-DD"
                            label = "Date Of Birth"
                            />
                            <CostumInput 
                            control={form.control} 
                            name="ssn"
                            placeholder="Example: 1234"
                            label = "SSN"
                            />
                        </div>
                    </>
                )
               }
                <CostumInput 
                control={form.control} 
                name="email"
                placeholder="Enter your email"
                label = "Email"
                />
                <CostumInput 
                control={form.control} 
                name="password"
                placeholder="Enter your Password"
                label = "Password"
                />
                <div className="flex flex-col gap-4">
                    <Button type="submit" disabled={isLoading} className="form-btn">
                    { isLoading ? (
                        <>
                        <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                        </>
                    ) : type === "sign-in" ? "Sign In" : "Sign Up"}
                    </Button>
            </div>
        </form>
        </Form>
        <footer className="flex justify-center gap-1">
             <p className="text-14 font-normal text-gray-600">
                {
                    type === "sign-in" ? (
                        <>Don't have an account?{" "} <Link href="sign-up" className="form-link">Sign Up</Link></>
                    ): (
                        <>Already have an account?{" "}<Link href="/sign-in" className="form-link">Sign In</Link></>
                    )
                }
             </p>
        </footer>
        </>
        )
      }
    </section>
  )
}

export default AuthForm
