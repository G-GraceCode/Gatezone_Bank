"user client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,  
    FormItem,
    FormLabel,
    FormMessage,
  } from "./ui/form";
  import { Input } from "./ui/input";
  import { Textarea } from "./ui/textarea";
  import ButtonSubmit from "./ButtonSubmit"
  import Link from "next/link"


  const formSchema = z.object({
    name: z.string().min(10, "Enter first name"),
    email: z.string().email("Invalide email address"),
  });

const UserUpdate = () => {
        
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });
    

    return(
        <Form {...form}>
        <form className="flex flex-col">
            <div>
                <div>
                    <h2>
                        Profile
                    </h2>
                </div>

                <div>
                    <div className="profile-img">
                        <span className="text-5xl font-bold     text-blue-500">{"U"}</span>
                    </div>
                    
                    <FormField 
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <div>
                                    <FormLabel>
                                    First Name
                                    </FormLabel>
                                    <div>
                                        <FormControl>
                                            <Input 
                                            placeholder={"First Name"}
                                            {...field} 
                                            className={`input-class`}
                                            type = { "text" }
                                            
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                

            </div>


        </form>
        </Form>
    )
}

export default UserUpdate