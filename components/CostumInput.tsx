import React, {useState} from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import {authFormSchema} from "@/lib/utils"
import Image from "next/image"
import Eyesee from "./Eyesee"


//formSchema
const formaSchema = authFormSchema("sign-up")

interface CustomInputType {
    control: Control<z.infer<typeof formaSchema>>; //to avoid pass wrong properties
    name: FieldPath<z.infer<typeof formaSchema>>;
    label: string;
    placeholder: string;
}

const CostumInput = ({control, name, label, placeholder}: CustomInputType) => {
  const [isSeeing, setIsSeeing] = useState(false);

  const handleEye = () => {
    setIsSeeing(isSeeing ? false : true)
  }

  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
        <div className="form-item">
        <FormLabel className="form-label">{label}</FormLabel>
        <div className="relative overflow-hidden flex w-full flex-col">
           {name === "password" && 
              (<Eyesee  handleEye={handleEye} see={isSeeing} />)}
            <FormControl>
                <Input 
                placeholder={placeholder}
                {...field} 
                className={`input-class`}
                type = {name === "password" && !isSeeing ? "password" : isSeeing ? "text" : "text" } />
            </FormControl>
            
            <FormMessage className="form-messsage mt-2" />

         </div>
        </div>
     )}
    />
  )
}

export default CostumInput
